import About from "./components/About";
import Blogs from "./components/Blogs";
import Certification from "./components/certification";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Blogs/>
      <Certification/>
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
