import { useEffect, useState } from "react";
import LOGO from "../../public/Images/LOGO.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authUserAsync, logoutUserAsync } from "../../features/authSlice";

function Navbar() {
  const [state, setState] = useState(false);
  const dispatch = useDispatch();

  const { User } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUserAsync()).then(() => {
      dispatch(authUserAsync());
    });
  };

  const navigation = [
    { title: "Home", path: "/" },
    { title: "Blog", path: "/blogs" },
    { title: "Products", path: "/products" },
    { title: "Contact", path: "/contact" },
    { title: "Favourites", path: "/UserFavourites" },
  ];

 

  return (
    <>
      <nav className="bg-gray-100 py-3 border-b w-full md:static md:text-sm md:border-none">
        <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to={"/"}>
              <img src={LOGO} width={120} height={50} alt="Float UI logo" />
            </Link>
            <div className="md:hidden">
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="text-gray-700 hover:text-indigo-600">
                    <Link to={item.path} className="block">
                      {item.title}
                    </Link>
                  </li>
                );
              })}
              {User?.admin ? (<li  className="text-gray-700 hover:text-indigo-600">
                    <Link to={'/contactqueries'} className="block">
                    Queries
                    </Link>
                  </li>): ""}
              <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
              <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
                {User?.login ? (
                  <li>
                    <Link
                      onClick={handleLogout}
                      className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
                    >
                      Log Out
                    </Link>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link
                        to={"/login"}
                        className="block py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none"
                      >
                        Log in
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/signup"}
                        className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline"
                      >
                        Sign Up
                      </Link>
                    </li>
                  </>
                )}
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
