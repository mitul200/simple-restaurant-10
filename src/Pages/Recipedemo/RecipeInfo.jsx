// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SpecificeRecipe from './SpecificeRecipe';

const RecipeInfo = () => {
    const foodItems = useLoaderData()
    console.log(foodItems)
    return (
        <div>
            <p className=' text-yellow-500 text-5xl font-semibold text-center'> Welcome to our Resturant</p>
            <div>
                {
                    foodItems.map(item=><SpecificeRecipe key={item._id}item={item}></SpecificeRecipe>)
                }
            </div>
        </div>
    );
};

export default RecipeInfo;