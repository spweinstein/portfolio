import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useParallax } from "../../hooks/useScrollReveal.js";
import "./ProjectSpotlight.css";

function ChevronLeft() {
  return (
    <svg
      className="spotlight__nav-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      className="spotlight__nav-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function IconPlay() {
  return (
    <svg
      className="spotlight__playpause-icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

function IconPause() {
  return (
    <svg
      className="spotlight__playpause-icon"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
    </svg>
  );
}

function MediaPanel({ src, alt }) {
  const parallaxRef = useParallax(0.15);
  return (
    <div className="spotlight__media-wrap">
      <div className="spotlight__media-inner" ref={parallaxRef}>
        <img
          className="spotlight__media-img"
          src={src}
          alt={alt}
          loading="lazy"
        />
      </div>
    </div>
  );
}

function ProjectTechAndLinks({ project }) {
  return (
    <>
      <ul className="spotlight__tech">
        {project.tech.map((t) => (
          <li key={t} className="spotlight__tag">
            {t}
          </li>
        ))}
      </ul>
      <div className="spotlight__links">
        <a
          href={project.liveUrl}
          className="spotlight__link spotlight__link--primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
        <a
          href={project.frontendRepo}
          className="spotlight__link spotlight__link--outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend
        </a>
        <a
          href={project.backendRepo}
          className="spotlight__link spotlight__link--outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Backend
        </a>
      </div>
    </>
  );
}

function SpotlightSlideText({ project, slide }) {
  const isOverview = slide.kind === "overview";
  const eyebrow = isOverview ? project.eyebrow : slide.eyebrow;
  const slideTitle = isOverview ? "Overview" : slide.title;
  const description = isOverview ? project.description : slide.description;
  const bullets = isOverview ? project.bullets : slide.bullets;

  return (
    <>
      <h3 className="spotlight__project-title">{project.title}</h3>
      <h4 className="spotlight__slide-title">{slideTitle}</h4>
      <span className="spotlight__eyebrow">{eyebrow}</span>
      <ProjectTechAndLinks project={project} />
      <p className="spotlight__description">{description}</p>
      <ul className="spotlight__bullets">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </>
  );
}

function SpotlightSlideContent({ project, slide }) {
  const isOverview = slide.kind === "overview";
  const image = isOverview ? project.image : slide.image;
  const imageAlt = isOverview ? project.imageAlt : slide.imageAlt;

  return (
    <>
      <div className="spotlight__text">
        <SpotlightSlideText project={project} slide={slide} />
      </div>
      <div className="spotlight__visual">
        <MediaPanel src={image} alt={imageAlt} />
      </div>
    </>
  );
}

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * @param {object} props
 * @param {object} props.project
 * @param {number} props.index
 */
export function ProjectSpotlight({ project, index }) {
  const slides = project.slides;

  const emblaPlugins = useMemo(
    () =>
      slides.length > 1
        ? [
            Autoplay({
              delay: 7000,
              playOnInit: true,
              stopOnInteraction: true,
            }),
          ]
        : [],
    [slides.length],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: slides.length > 1,
    },
    emblaPlugins,
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(slides.length > 1);
  const [autoplayRunning, setAutoplayRunning] = useState(true);

  const onSelect = useCallback((api) => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || slides.length < 2) return;
    const onAutoplayPlay = () => setAutoplayRunning(true);
    const onAutoplayStop = () => setAutoplayRunning(false);
    emblaApi.on("autoplay:play", onAutoplayPlay);
    emblaApi.on("autoplay:stop", onAutoplayStop);
    return () => {
      emblaApi.off("autoplay:play", onAutoplayPlay);
      emblaApi.off("autoplay:stop", onAutoplayStop);
    };
  }, [emblaApi, slides.length]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (i) => {
      emblaApi?.scrollTo(i);
    },
    [emblaApi],
  );

  const toggleAutoplay = useCallback(() => {
    const ap = emblaApi?.plugins()?.autoplay;
    if (!ap) return;
    if (ap.isPlaying()) {
      ap.stop();
    } else {
      ap.play();
    }
  }, [emblaApi]);

  const isEven = index % 2 === 0;
  const baseClass = ["spotlight", index % 2 === 1 ? "spotlight--alt" : ""]
    .filter(Boolean)
    .join(" ");

  const slideGridClass = [
    "spotlight__slide-grid",
    isEven ? "" : "spotlight__slide-grid--reversed",
  ]
    .filter(Boolean)
    .join(" ");

  const baseId = slugify(project.title);

  return (
    <div className={baseClass}>
      <div className="spotlight__carousel-shell">
        <div
          className="spotlight__viewport"
          ref={emblaRef}
          role="region"
          aria-roledescription="carousel"
          aria-label={`${project.title} slides`}
        >
          <div className="spotlight__carousel-container">
            {slides.map((slide, slideIndex) => (
              <div
                className="spotlight__carousel-slide"
                key={slide.id}
                id={`${baseId}-slide-${slideIndex}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${slideIndex + 1} of ${slides.length}: ${slide.kind === "overview" ? "Overview" : slide.title}`}
                aria-hidden={selectedIndex !== slideIndex}
                inert={selectedIndex !== slideIndex}
              >
                <div className={slideGridClass}>
                  <SpotlightSlideContent project={project} slide={slide} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="spotlight__controls">
          <button
            type="button"
            className="spotlight__nav"
            onClick={scrollPrev}
            disabled={!canPrev}
            aria-label={`Previous slide, ${project.title}`}
          >
            <ChevronLeft />
          </button>

          <div
            className="spotlight__dots"
            role="tablist"
            aria-label={`${project.title} slide picker`}
          >
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={selectedIndex === i}
                aria-controls={`${baseId}-slide-${i}`}
                className={`spotlight__dot ${selectedIndex === i ? "spotlight__dot--active" : ""}`}
                onClick={() => scrollTo(i)}
                aria-label={
                  slide.kind === "overview"
                    ? `Overview for ${project.title}`
                    : `${slide.title} slide`
                }
              />
            ))}
          </div>

          <span className="spotlight__counter" aria-live="polite">
            {selectedIndex + 1} / {slides.length}
          </span>

          {slides.length > 1 && (
            <button
              type="button"
              className="spotlight__playpause"
              onClick={toggleAutoplay}
              aria-label={
                autoplayRunning
                  ? `Pause autoplay for ${project.title}`
                  : `Play autoplay for ${project.title}`
              }
              aria-pressed={autoplayRunning}
            >
              {autoplayRunning ? <IconPause /> : <IconPlay />}
            </button>
          )}

          <button
            type="button"
            className="spotlight__nav"
            onClick={scrollNext}
            disabled={!canNext}
            aria-label={`Next slide, ${project.title}`}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
