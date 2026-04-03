/**
 * Cosmic nebula raster (1024×453 JPEG). Horizontal color flow: deep space → red/purple →
 * orange/yellow → teal/cyan, with stars and soft glow.
 * Served from `public/patterns/nebula.jpg`. Pass `nebulaBackgroundSize` to ParallaxBg.
 */

/** Solid underlay so parallax overscroll doesn’t show a mismatched gap */
export const nebulaBg = "#060814";

/** One tile at native aspect ratio (~2.26∶1) */
export const nebulaBackgroundSize = "1024px 453px";

export const nebulaPattern = `url("/patterns/nebula.jpg")`;
