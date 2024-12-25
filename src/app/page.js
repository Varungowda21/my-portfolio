import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from './components/Skills';
// import Projects from '@/components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "./mediaQ.css";

export default function Home() {
  return (
    <>
      <Header />
      <Profile />
      <About />
      <Skills />
      <Contact />
      {/* <Projects />*/}
      <Footer />  
    </>
  );
}
