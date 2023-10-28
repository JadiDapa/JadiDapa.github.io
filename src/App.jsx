import Navbar from "./components/Navbar";
import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Project,
  Quote,
  Skill,
} from "./section";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Experience />
      <Project />
      <Quote />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
