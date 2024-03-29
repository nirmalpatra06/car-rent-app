import { useEffect, useState, useRef } from "react";
import NavBar from "./components/navBar/NavBar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Service from "./components/service/Service";
import CarsList from "./components/carsList/CarsList";
import Testimonial from "./components/testimonial/Testimonial";
import AppStore from "./components/appStore/AppStore";
import Footer from "./components/footer/Footer";
function App() {
  const aboutRef = useRef(null);
  const carSectionRef = useRef(null);
  const serviceRef = useRef(null);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  //DarkMode
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "light") {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  //Animate on scroll(AOS)
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <NavBar
        theme={theme}
        setTheme={setTheme}
        aboutRef={aboutRef}
        carSectionRef={carSectionRef}
        serviceRef={serviceRef}
      />
      <Hero theme={theme} />
      <About ref={aboutRef} />
      <CarsList ref={carSectionRef} />
      <Service ref={serviceRef} />
      <Testimonial />
      <AppStore />
      <Footer />
    </div>
  );
}

export default App;
