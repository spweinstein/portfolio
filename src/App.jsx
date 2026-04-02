import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Principles from "./components/Principles/Principles.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Skills from "./components/Skills/Skills.jsx";
// import Experience from "./components/Experience/Experience.jsx";
import Education from "./components/Education/Education.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Principles />
        <Portfolio />
        <Skills />
        {/* <Experience /> */}
        <Education />
      </main>
      <Footer />
    </>
  );
}

export default App;
