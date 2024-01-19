import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import RecipeDemos from "../Pages/Recipedemo/RecipeDemos";
import Items from "../Pages/Itemspage/Items";

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
  ]);

  export default router