import AboutMe from './AboutMe';
import './App.css';
import Footer from './Footer';
import Hero from './Hero';
import Projects from './Projects';
import Navbar from './navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
