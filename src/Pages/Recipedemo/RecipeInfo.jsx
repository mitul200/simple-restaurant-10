// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData,  useNavigation } from "react-router-dom";
import SpecificeRecipe from "./SpecificeRecipe";
import Loding from "../../utils/Loding";

const RecipeInfo = () => {
  const foodItems = useLoaderData();
  const navigate = useNavigation()
  if(navigate.state === 'loading'){
    return <Loding/>
  }
  console.log(foodItems);
  return (
    <div>
      <p className=" mt-10 text-yellow-500 text-5xl font-semibold text-center">
        Welcome to our Resturant
      </p>
      <div className=" flex justify-center mt-8">
        <Link to="/">
          <button className="btn bg-red-500 px-10 text-white"> <FaArrowLeft className=" text-white"/> Back Home</button>
        </Link>
      </div>
      <div className="  my-10 mx-8 gap-5 grid grid-cols-2 md:grid-cols-3">
        {foodItems.map((item) => (
          <SpecificeRecipe key={item._id} item={item}></SpecificeRecipe>
        ))}
      </div>
    </div>
  );
};

export default RecipeInfo;
