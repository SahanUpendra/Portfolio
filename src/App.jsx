import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import FantasyArchitect from './components/FantasyArchitect.jsx';
import CareerVision from './components/CareerVision.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <FantasyArchitect />
        <CareerVision />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
