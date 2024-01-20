import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import RecipeDemos from "../Pages/Recipedemo/RecipeDemos";
import Items from "../Pages/Itemspage/Items";
import RecipeInfo from "../Pages/Recipedemo/RecipeInfo";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path:'/',
            element:<RecipeDemos/>,
            children:[
                {
                    path:'/',
                    element:<Items/>,
                    loader:()=> fetch('http://localhost:5000/items')
                }
            ]
        }
      ]
    },
    {
      path:"/categories",
      element:<MainLayout></MainLayout>,
      children:[
        {
          path:':id',
          element:<RecipeInfo/>,
          loader:({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
        }
      ]
    }
  ]);

  export default router