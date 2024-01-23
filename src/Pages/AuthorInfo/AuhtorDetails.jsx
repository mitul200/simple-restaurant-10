/* eslint-disable react/prop-types */
const AuhtorDetails = ({ authorInfo }) => {
  // console.log(authorInfo);
  const { chefPicture, chefName, yearsOfExperience, likes} =
    authorInfo;
  return (
    <div>
      <div className="card w-[200px] bg-base-100 shadow-xl">
        <figure className=" h-[200px] w-[200px]">
          <img
            src={chefPicture}
            className="rounded-xl"
          />
        </figure>
        <div className="m-2">
          <p className="mb-2 uppercase font-bold">Name : {chefName}</p>
          <h2 className="card-title mb-2">Exprience : {yearsOfExperience} Years</h2>
          <p className=" mb-4">like : {likes} people</p>
        </div>
      </div>
    </div>
  );
};

export default AuhtorDetails;
