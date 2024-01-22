import { useLoaderData } from "react-router-dom";
import { IoMdTime } from "react-icons/io";
import Marquee from "react-fast-marquee";

const ItemsDetails = () => {
  const alldetails = useLoaderData();
  console.log(alldetails);
  const { image_url, rating, title, category_id, author,details} = alldetails;
  return (
    <div>
      <div className=" mx-auto md:ml-52 p-5 md:w-[900px]">
        <div className="">
          <div className=" md:flex items-center  justify-around  bg-gray-200 rounded-lg">
            <img
              className="w-[80px] h-[80px] rounded-full"
              src={author?.img}
              alt=""
            />
            <div>
              <p>AUTHOR</p>
              <p>{author.name ? <>{author.name}</> : "MASTER CHEEF"}</p>
            </div>

            {/* prepar time  */}
            <div className="flex items-center">
              <p>
                <IoMdTime className=" text-gray-800 h-14 w-14" />
              </p>
              <div>
                <p className=" text-sky-700">PREP TIME</p>
                <p>15 mins</p>
              </div>
            </div>
            {/* cooking time  */}
            <div className="flex items-center">
              <p>
                <IoMdTime className=" text-gray-800 h-14 w-14" />
              </p>
              <div>
                <p className=" text-yellow-600">COOKING TIME</p>
                <p>25 mins</p>
              </div>
            </div>
            {/* total time  */}
            <div className="flex items-center">
              <p>
                <IoMdTime className=" text-gray-800 h-14 w-14" />
              </p>
              <div>
                <p className=" text-red-600">TOTAL TIME</p>
                <p>25 mins</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-6">
            <Marquee className="  font-semibold text-gray-600">A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.</Marquee>
        </div>
        <img
          src={image_url}
          alt="Album"
          className=" rounded-lg h-[400px] w-[900px]"
        />
        <p className=" text-lg from-neutral-500">{details}</p>
        
      </div>
    </div>
  );
};

export default ItemsDetails;
