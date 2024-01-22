import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Pages/PrivetRouter/PrivetRouter";
import { FaUserAlt } from "react-icons/fa";

const Navber = () => {
  const { user, logingOut } = useContext(AuthContext);
  const handelLogout = () => {
    logingOut().then(() => {});
  };

  console.log(user);

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">abouts</Link>
              </li>
            </ul>
          </div>
          <Link
            to=""
            className="btn btn-ghost text-xl text-gray-600 font-bold  "
          >
            Hungry <span className=" text-red-700 font-bold">Resturant</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/"> blog</Link>
            </li>
            <li>
              <Link to="/"> abouts</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <p className=" font-semibold text-slate-800 mr-4">
                {" "}
                {user && user.email ? (
                  <>
                    <p className=" font-semibold text-slate-800 mr-4">
                      Welcome :{user.email}
                    </p>
                  </>
                ) : (
                  <>
                    <FaUserAlt />
                  </>
                )}
              </p>
            </>
          ) : (
            <></>
          )}
          {user ? (
            <button onClick={handelLogout} className="btn">
              LogOut
            </button>
          ) : (
            <Link to="/login" className="btn mr-5">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
