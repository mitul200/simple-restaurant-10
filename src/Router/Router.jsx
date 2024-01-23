import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import RecipeDemos from "../Pages/Recipedemo/RecipeDemos";
import Items from "../Pages/Itemspage/Items";
import RecipeInfo from "../Pages/Recipedemo/RecipeInfo";
import Layouts from "../Layouts/Layouts";
import ItemsDetails from "../Pages/ItemsDetails/ItemsDetails";
import Login from "../Pages/LoginRegister/Login";
import Register from "../Pages/LoginRegister/Register";
import Wall from "../Pages/wall/Wall";
import ErrorPages from "../Pages/errorpages/ErrorPages";
import Blogs from "../Pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPages />,
    children: [
      {
        path: "/",
        element: <RecipeDemos />,
        children: [
          {
            path: "/",
            element: <Items />,
            loader: () =>
              fetch(
                "https://simple-restaurant-server.vercel.app/items"
              ),
          },
        ],
      },
    ],
  },
  {
    path: "/categories",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
      {
        path: ":id",
        element: <RecipeInfo />,
        loader: ({ params }) =>
          fetch(
            `https://simple-restaurant-server.vercel.app/categories/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/items",
    element: <Layouts />,
    errorElement: <ErrorPages />,
    children: [
      {
        path: ":id",
        element: (
          <Wall>
            <ItemsDetails />
          </Wall>
        ),
        loader: ({ params }) =>
          fetch(
            `https://simple-restaurant-server.vercel.app/items/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
]);

export default router;
