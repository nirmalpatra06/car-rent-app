/* eslint-disable react/prop-types */
import { MdOutlineWbSunny } from "react-icons/md";
import { HiMoon } from "react-icons/hi2";

const navLinks = [
  {
    id: 1,
    name: "HOME",
    link: "/",
  },
  {
    id: 2,
    name: "CARS",
    link: "/#cars",
  },
  {
    id: 3,
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 4,
    name: "BOOKING",
    link: "/#booking",
  },
];
function NavBar({ theme, setTheme }) {
  return (
    <nav className="shadow-lg border-b-2 bg-white dark:bg-dark dark:text-white dark:border-b-[0.5px] duration-300 ">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-3xl font-serif transition-colors duration-300">
              Cars 4 U
            </h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((item) => (
                <li key={item.id} className="py-4 ">
                  <a
                    className="inline-block py-2 font-medium hover:border-b-[0.5px] text-lg transition-colors duration-300 hover:text-primary hover:border-b-primary"
                    href={item.link}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {theme === "dark" ? (
              <MdOutlineWbSunny
                onClick={() => setTheme("light")}
                className="text-3xl cursor-pointer"
              />
            ) : (
              <HiMoon
                onClick={() => setTheme("dark")}
                className="text-3xl cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
