import "./App.css";
import "./css/themeToggle.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { ThemeToggle } from "./components/ThemeToggle";
import { scroller } from "react-scroll";
import { React } from "react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  // Smooth scrolling to top of window
  const scrollToTop = () => {
    scroller.scrollTo("home", {
      duration: 400,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  // Smooth scrolling to projects section
  const scrollToProjects = () => {
    scroller.scrollTo("projects", {
      duration: 400,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="App">
      <ThemeToggle />
      <Home />
      <Projects />
      <Footer scrollToProjects={scrollToProjects} scrollToTop={scrollToTop} />
      <Analytics />
    </div>
  );
}

export default App;
