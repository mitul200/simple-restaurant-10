import { useLoaderData } from "react-router-dom";
import ItemsCards from "../ItemsCards/ItemsCards";

const Items = () => {
    const items = useLoaderData()
    console.log(items);
    return (
        <div>
            <p className=" font-semibold text-xl text-center mt-32 text-orange-500">Recent Recipes</p>
            <h2 className="text-center my-4 font-semibold text-7xl ">Latest Recipe</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mx-8 mt-20">
                {
                    items.slice(0,6).map(item=><ItemsCards key={item._id} item={item}></ItemsCards>)
                }
            </div>
        </div>
    );
};

export default Items;