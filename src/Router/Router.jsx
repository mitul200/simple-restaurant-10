import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import RecipeDemos from "../Pages/Recipedemo/RecipeDemos";
import Items from "../Pages/Itemspage/Items";
import RecipeInfo from "../Pages/Recipedemo/RecipeInfo";
import Layouts from "../Layouts/Layouts";
import ItemsDetails from "../Pages/ItemsDetails/ItemsDetails";
import Login from "../Pages/LoginRegister/Login";
import Register from "../Pages/LoginRegister/Register";
import Wall from "../Pages/wall/Wall";

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
    },
    {
      path:'/items',
      element:<Layouts/>,
      children:[
        {
          path:':id',
          element:<Wall><ItemsDetails/></Wall>,
          loader:({params})=>fetch(`http://localhost:5000/items/${params.id}`)
        }
      ]
    },
    {
      path:'/',
      element:<Layouts/>,
      children:[
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'register',
          element:<Register/>
        }
      ]

    }
  ]);

  export default router