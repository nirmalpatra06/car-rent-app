/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import aboutCar from "../../assets/images/bmcar.png";

function About({ props }, ref) {
  return (
    <div
      ref={ref}
      className="font-serif  bg-slate-100 dark:bg-black dark:text-white sm:min-h-[450px] sm:grid sm:place-items-center"
    >
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center space-x-5">
          <div
            data-aos="slide-right"
            data-aos-duration="900"
            className="w-[350px] sm:w-[600px]"
          >
            <img src={aboutCar} alt="about-car" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
            className="space-y-5 sm:p-12"
          >
            <h1 className="text-center text-3xl font-bold sm:text-4xl">
              About us
            </h1>
            <p>
              Lorem ipsum dolor sit ullam. Enim beatae officiis ad iusto vitae
              eligendi laborum. Dolore doloribus a asperiores veritatis
              laboriosam, dolor beatae fugiat repellendus assumenda explicabo.
              Labore id animi ea natus, ipsum ut harum nesciunt placeat vel
              repellat, incidunt saepe aperiam at.
            </p>
            <button className="border-2 rounded border-primary hover:bg-primary hover:text-black transition-[0.3] px-4 py-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(About);
