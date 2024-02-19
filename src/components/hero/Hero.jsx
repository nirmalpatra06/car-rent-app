/* eslint-disable react/prop-types */
import carBannerWhite from "../../assets/images/banner.png";
import carBannerDark from "../../assets/images/banner2.png";

function Hero({ theme }) {
  return (
    <div className="bg-white dark:bg-black dark:text-white  duration-300">
      <div className="container min-h-[450px] flex">
        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2  ">
          <div className="text-center font-bold flex flex-col gap-4 transition-colors duration-300 ">
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-3xl lg:text-5xl  "
            >
              The perfect car for your next trip is just around the corner
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-3xl  lg:text-5xl text-blue-500"
            >
              Book your drive now!
            </p>
          </div>
          <div data-aos="zoom-in" data-aos-duration="900">
            <img
              className="w-[100%]  sm:scale-120 z-10  max-h-[450px] "
              src={theme === "dark" ? carBannerDark : carBannerWhite}
              alt="banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
