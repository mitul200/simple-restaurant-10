import { useLoaderData } from "react-router-dom";

const Items = () => {
    const items = useLoaderData()
    console.log(items);
    return (
        <div>
            <h2 className="text-center my-4">This is items pages</h2>
            <div>
                {
                    items.map(item=>console.log(item))
                }
            </div>
        </div>
    );
};

export default Items;