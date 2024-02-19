import { useEffect, useState } from "react";
import NavBar from "./components/navBar/NavBar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Service from "./components/service/Service";
import CarsList from "./components/carsList/CarsList";
function App() {
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
      <NavBar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About />
      <Service />
      <CarsList />
    </div>
  );
}

export default App;
