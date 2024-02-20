/* eslint-disable react/prop-types */

import { FaCircleUser } from "react-icons/fa6";
import { navLinks } from "../navBar/NavBar";
function Menu({ showMenu }) {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "left-full "
      }  fixed top-0 z-50 bg-white dark:bg-gray-800 h-screen w-[75%] md:hidden rounded-r-xl shadow-md flex-col justify-between px-8 pt-6 transition-all duration-300`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaCircleUser size={40} />
          <div>
            <h1>User X</h1>
          </div>
        </div>
        <nav>
          <ul className="space-y-4 text-xl pt-6">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a className="hover:text-primary" href={item.link}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
