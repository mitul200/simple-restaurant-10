import bannerimg from "../assets/pexels-min-an-1482803.jpg";
import Navber from "../utils/Navber";
const Banner = () => {
  return (
    <div>
      <div className=" relative">
        <img className=" w-screen h-screen" src={bannerimg} alt="" />
        <div className=" absolute top-44 sm:left-28 md:left-32 space-y-3">
          <h2 className=" text-6xl font-semibold text-white">
            Welcome to our Brand New <br />
            <span className="text-gray-300">Hungry</span>
            <span className=" text-red-700 font-bold">Resturant</span>{" "}
          </h2>
          <p className="  text-white font-semibold text-2xl">
            A handful of simple ingredients of new typify the fresh, vibrant flavors of
            Greek cooking.
          </p>
        </div>
        <div className=" absolute top-0 opacity-50 w-screen">
          <Navber />
        </div>
      </div>
    </div>
  );
};

export default Banner;
