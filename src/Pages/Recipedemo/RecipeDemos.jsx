import { useEffect, useState } from "react";
import RecipeDemoDetails from "./RecipeDemoDetails";
import { Outlet } from "react-router-dom";

const RecipeDemos = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <p className=" font-semibold text-xl text-center my-2 text-yellow-400">
        Choose a Category
      </p>
      <h2 className=" font-bold mb-8 text-6xl text-center">
        Recipe Categories {categories.length}
      </h2>
      <div className=" grid grid-cols-4 md:grid-cols-8 mx-8 gap-5">
        {categories.map((category) => (
          <RecipeDemoDetails
            key={category.id}
            category={category}
          ></RecipeDemoDetails>
        ))}
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default RecipeDemos;
