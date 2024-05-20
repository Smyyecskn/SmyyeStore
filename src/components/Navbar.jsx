import React, { useContext, useState } from "react";
import { closeNavbar, openNavbar, logoutIcon } from "../helper/icons";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
const navigation = [
  {
    title: "Home",
    path: "/dashboard",
  },
  {
    title: "Products",
    path: "/dashboard/products",
  },
  {
    title: "About",
    path: "/dashboard/about",
  },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { logout } = useContext(AuthContext);
  const location = useLocation(); //!useLocation hook'u, geçerli konumu bir nesne olarak döndürür. Bu nesne, routerdan gelen konum yolunu, konum parametrelerini ve konum durumunu içerir.
  console.log(location);

  return (
    <nav className="bg-purple-200 md:text-sm">
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-5 md:block">
          <a
            href="https://i.pinimg.com/736x/ce/56/99/ce5699233cbc0f142250b520d967dff7.jpg"
            target="true"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img
              src="https://i.pinimg.com/736x/ce/56/99/ce5699233cbc0f142250b520d967dff7.jpg"
              width={50}
              height={50}
              alt="Clarusway"
            />
            {/* <span className="text-gray-700 hover:text-gray-900 font-medium">
              Smyye Shop
            </span> */}
          </a>
          {/**iconu md ekranlardan sonra gizlensin diyoruz */}
          <div className="md:hidden">
            <button
              className="menu-btn text-purple-700 hover:text-gray-800"
              onClick={() => setShow(!show)}
            >
              {show ? closeNavbar : openNavbar}
            </button>
          </div>
        </div>
        <div
          className={`${
            show ? "flex flex-col pb-2" : "hidden"
          } flex-1 items-center md:flex md:flex-row`}
        >
          <ul className="space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item) => (
              <li
                key={item.title}
                className="text-gray-700 font-medium  flex justify-center"
              >
                <NavLink
                  to={item.path}
                  className={`block hover:bg-main rounded-full py-2 px-4 hover:text-white ${
                    location.pathname === item.path ? "underline scale-150" : ""
                  }`}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            <NavLink
              to="/"
              onClick={logout}
              className="flex items-center justify-center gap-x-1 py-2 px-4 font-medium text-gray-700 hover:bg-main hover:text-white active:bg-gray-900 rounded-full md:inline-flex"
            >
              Logout {logoutIcon}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
