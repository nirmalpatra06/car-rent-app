import playStoreImg from "../../assets/images/playstr.png";
import AppleStoreImg from "../../assets/images/applestr.png";

function AppStore() {
  return (
    <div className="dark:bg-black ">
      <div className="container w-full">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="py-10 sm:min-h-[400px] grid place-items-center rounded-xl bg-gray-200 dark:bg-dark dark:text-white"
        >
          <h1 className="text-3xl sm:text-4xl">Get Our App</h1>
          <p className="text-center px-6 sm:px-[150px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Esse necessitatibus
            voluptas voluptate quibusdam aspernatur quos!
          </p>
          <div className="grid sm:grid-cols-2">
            <img
              className="h-[100px] cursor-pointer"
              src={playStoreImg}
              alt="play-str"
            />
            <img
              className="h-[95px] cursor-pointer"
              src={AppleStoreImg}
              alt="apple-str"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppStore;
