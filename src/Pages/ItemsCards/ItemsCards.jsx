// eslint-disable-next-line react/prop-types
const ItemsCards = ({ item }) => {
  console.log(item);
  // eslint-disable-next-line react/prop-types
  const {image_url,category_id,title} = item
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
         <img src={image_url} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{category_id}</h2>
          <p className=" uppercase font-semibold text-xl">{title}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsCards;
