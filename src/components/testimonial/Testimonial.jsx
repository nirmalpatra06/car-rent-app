const data = [
  {
    name: "Saroj",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, magni.",
    aosDelay: "0",
  },
  {
    name: "Aryan",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, magni.",
    aosDelay: "300",
  },
  {
    name: "Somu",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, magni.",
    aosDelay: "600",
  },
];

function Testimonial() {
  return (
    <div className="dark:text-white dark:bg-black py-14 sm:pb-20">
      <div className="container">
        {/* Header */}
        <div className="space-y-4 pb-12">
          <p
            data-aos="fade-up"
            className="text-3xl font-semibold text-center font-serif sm:text-4xl"
          >
            What Our Clients Say About Us
          </p>
          <p data-aos="fade-up" className="text-center sm:px-44">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, ea
            facere. Inventore, voluptatem ullam? Nesciunt quaerat vero odit nemo
            corporis!
          </p>
        </div>
        {/* Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 dark:text-white">
          {data.map((user) => (
            <div
              data-aos="fade-up"
              data-aos-delay={user.aosDelay}
              key={user.name}
              className="text-center group space-y-3 sm:space-y-6 bg-gray-200 hover:bg-gray-300 dark:bg-dark dark:hover:bg-[#0e3a5b] duration-300 p-6 rounded-md sm:p-8"
            >
              <div className="grid place-items-center">
                <img
                  className="h-20 w-20 rounded-full"
                  src="https://picsum.photos/200"
                  alt="uimg"
                />
                <h1 className="font-bold">{user.name}</h1>
              </div>
              <div className="text-center">
                <div>⭐⭐⭐⭐⭐</div>
                <p className="font-semibold px-10 sm:px-20">
                  {user.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
