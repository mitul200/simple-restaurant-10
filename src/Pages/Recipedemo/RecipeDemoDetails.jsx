import { Link } from "react-router-dom";

 
// eslint-disable-next-line react/prop-types
const RecipeDemoDetails = ({category}) => {
    console.log(category);
    // eslint-disable-next-line react/prop-types
    const {name, img, id} = category
    return (
        <div>
            <Link to=''>
                <img className=" hover:opacity-50 hover:duration-100   w-[160px] h-[160px] rounded-full " src={img} alt="" />
                <p className=" uppercase mt-2 font-semibold text-center">{name}</p>
            </Link>
        </div>
    );
};

export default RecipeDemoDetails;