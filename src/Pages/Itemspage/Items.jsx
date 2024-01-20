import { useLoaderData } from "react-router-dom";
import ItemsCards from "../ItemsCards/ItemsCards";

const Items = () => {
    const items = useLoaderData()
    console.log(items);
    return (
        <div>
            <h2 className="text-center my-4">This is items pages</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 mx-8 mt-20">
                {
                    items.slice(0,6).map(item=><ItemsCards key={item._id} item={item}></ItemsCards>)
                }
            </div>
        </div>
    );
};

export default Items;