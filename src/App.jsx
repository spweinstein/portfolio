import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import FeaturedProjects from "./components/FeaturedProjects/FeaturedProjects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <FeaturedProjects />
        <Skills />
      </main>
      <Footer />
    </>
  );
}

export default App;
