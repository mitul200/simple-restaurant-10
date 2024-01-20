import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const StarRating = ({ rating }) => {
//   console.log(rating);
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let numbers = index + 0.5;
    return (
      <span key={index}>
        {rating > index + 1 ? (
          <FaStar className=" text-yellow-400" />
        ) : rating >= numbers ? (
          <FaStarHalfAlt className=" text-yellow-400" />
        ) : (
          <FaRegStar className=" text-yellow-400" />
        )}
      </span>
    );
  });
  return (
    <div className=" flex items-center">
        <p className=" text-gray-600 font-semibold">Rating for Customars :</p>
      <div className=" flex">{ratingStar}</div>
    </div>
  );
};

export default StarRating;
