import {
  FaFacebookF,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

function Footer() {
  return (
    <footer className=" bg-gray-100  dark:bg-black dark:text-white pt-10 ">
      <div className="container">
        <div className="grid md:grid-cols-3 py-5 ">
          <div className="py-8 px-4">
            <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify">
              Cars 4 U
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sit
              doloribus vel magnam ut maxime quas quo quidem dicta ea.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>XYZ, India</p>
            </div>
            <div className="flex items-center gap-3">
              <FaMobileAlt />
              <p>+91 1234567899</p>
            </div>
            {/* handles */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="text-3xl hover:text-primary duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="text-3xl hover:text-primary duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-3xl hover:text-primary duration-300">
                <FaTwitterSquare />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 py-8 px-4 md:pl-10">
            {/* first */}
            <div>
              <div>
                <h1 className="text-xl  font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:text-primary duration-300"
                    >
                      <span className="mr-2">&#11162;</span>
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Second */}
            <div>
              <div>
                <h1 className="text-xl  font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:text-primary duration-300"
                    >
                      <span className="mr-2">&#11162;</span>
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Third */}
            <div>
              <div>
                <h1 className="text-xl  font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:text-primary duration-300"
                    >
                      <span className="mr-2">&#11162;</span>
                      <a href={link.link}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
