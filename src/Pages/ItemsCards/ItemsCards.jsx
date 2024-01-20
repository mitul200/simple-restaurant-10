import StarRating from "../../utils/StarRating";

// eslint-disable-next-line react/prop-types
const ItemsCards = ({ item }) => {
  console.log(item);
  // eslint-disable-next-line react/prop-types
  const {image_url,title,rating} = item
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
         <img className="" src={image_url} alt="" />
        </figure>
        <div className="card-body">
          <p className=" uppercase font-semibold text-xl">{title}</p>
          <p className=" text-slate-600 font-semibold">A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.</p>
           <StarRating rating={rating} />

          
        </div>
      </div>
    </div>
  );
};

export default ItemsCards;
