import C2 from "../../assets/images/c2.png";
import G1 from "../../assets/images/g1.png";
import R2 from "../../assets/images/r2.png";
import Y1 from "../../assets/images/y1.png";
import WhiteCar from "../../assets/images/white-car.png";
import WhiteScorpio from "../../assets/images/wb.png";
import P1 from "../../assets/images/p1.png";
import Y2 from "../../assets/images/car2.png";
import B1 from "../../assets/images/b1.png";

const carsList1 = [
  {
    name: "CAR 1",
    price: 100,
    image: P1,
    aosDelay: "0",
  },
  {
    name: "CAR 2",
    price: 130,
    image: R2,
    aosDelay: "300",
  },
  {
    name: "CAR 3",
    price: 150,
    image: Y2,
    aosDelay: "500",
  },
  {
    name: "CAR 4",
    price: 150,
    image: C2,
    aosDelay: "500",
  },
  {
    name: "CAR 5",
    price: 150,
    image: Y1,
    aosDelay: "500",
  },
  {
    name: "CAR 6",
    price: 150,
    image: G1,
    aosDelay: "500",
  },
  {
    name: "CAR 7",
    price: 150,
    image: WhiteCar,
    aosDelay: "500",
  },
  {
    name: "CAR 8",
    price: 150,
    image: WhiteScorpio,
    aosDelay: "500",
  },
  {
    name: "CAR 9",
    price: 150,
    image: B1,
    aosDelay: "500",
  },
];

function CarsList() {
  return (
    <div className="pb-24 bg-slate-100 dark:bg-black pt-12 dark:text-white">
      <div className="container">
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Available Cars
        </h1>
        <p data-aos="fade-up" className="text-sm pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <div>
          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 place-items-center gap-16">
            {carsList1.map((car) => (
              <div
                data-aos="fade-up"
                data-aos-delay={car.aosDelay}
                key={car.name}
                className="space-y-3 border-2 cursor-pointer border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-[70%] h-[120px] pl-14">
                  <img
                    className="w-full h-[200px]  object-contain sm:translate-x-8 group-hover:translate-y-4 duration-500"
                    src={car.image}
                    alt="carImg"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary text-2xl font-semibold">
                    {car.name}
                  </h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>${car.price}/h</p>
                    <a href="#">Details</a>
                  </div>
                  <p className="absolute text-xl font-semibold top-0 left-2">
                    25km
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-xl grid place-items-center mt-10 dark:text-white ">
            <button
              data-aos="fade-up"
              data-aos-delay="300"
              className=" border-2 border-primary py-2 px-1 rounded-sm outline-none hover:bg-primary"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarsList;
