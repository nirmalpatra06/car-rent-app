import { IoIosCamera } from "react-icons/io";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { TfiWrite } from "react-icons/tfi";
const dataList = [
  {
    name: "Best Price",
    icon: (
      <IoIosCamera className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque blanditiis, sapiente rem quam dicta aspernatur! Dolores in saepe ipsum impedit?",
    aosDelay: "0",
  },
  {
    name: "Fast and Safe",
    icon: (
      <AiFillSafetyCertificate className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque blanditiis, sapiente rem quam dicta aspernatur! Dolores in saepe ipsum impedit?",
    aosDelay: "500",
  },
  {
    name: "Experience",
    icon: (
      <TfiWrite className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque blanditiis, sapiente rem quam dicta aspernatur! Dolores in saepe ipsum impedit?",
    aosDelay: "1000",
  },
];
function Service() {
  return (
    <div className="py-14 bg-slate-100 dark:bg-black dark:text-white sm:min-h-[450px] sm:grid place-items-center ">
      <div className="container">
        <div className="pb-12 ">
          <h1 className="text-3xl font-bold text-center font-serif sm:text-4xl">
            Why Choose Us
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {dataList.map((item) => (
            <div
              key={item.name}
              data-aos="fade-up"
              data-aos-delay={item.aosDelay}
              className="text-white card text-center groupspace-y-3 sm:space-y-6 p-4 sm:p-16 bg-dark hover:bg-[#0e3a5b] duration-300 rounded-lg"
            >
              <div className="grid place-items-center">{item.icon}</div>
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <a className="text-primary " href={item.link}>
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
