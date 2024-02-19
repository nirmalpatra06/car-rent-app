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
    name: "BMW 1",
    price: 100,
    image: C2,
    aosDelay: "0",
  },
  {
    name: "BMW 2",
    price: 130,
    image: R2,
    aosDelay: "0",
  },
  {
    name: "BMW 3",
    price: 150,
    image: Y2,
    aosDelay: "0",
  },
  {
    name: "BMW 4",
    price: 200,
    image: P1,
    aosDelay: "0",
  },
];

function CarsList() {
  return (
    <div className="pb-24 bg-white dark:bg-black pt-12 dark:text-white">
      <div className="container">
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Heading
        </h1>
        <p data-aos="fade-up" className="text-sm pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-16">
            {carsList1.map((car) => (
              <div
                key={car.name}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-[70%] h-[120px] pl-14">
                  <img src={car.image} alt="carImg" />
                </div>
                <div>
                  <h1>{car.name}</h1>
                  <div>
                    <p>${car.price}/h</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarsList;
