import { Link } from "react-router-dom";
import StarRating from "../../utils/StarRating";

// eslint-disable-next-line react/prop-types
const SpecificeRecipe = ({ item }) => {
  // eslint-disable-next-line react/prop-types
  const { image_url, rating, title,category_id} = item;
  return (
    <div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="" src={image_url} alt="" />
          </figure>
          <div className="card-body">
            <p className=" uppercase font-semibold text-xl">{title}</p>
            <p className=" text-slate-600 font-semibold">
              A handful of simple ingredients typify the fresh, vibrant flavors
              of Greek cooking.
            </p>
            <StarRating rating={rating} />
            <button className="btn mt-2 bg-yellow-500 text-white font-bold"> <Link to={`/items/${category_id}`}>View Details</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificeRecipe;
