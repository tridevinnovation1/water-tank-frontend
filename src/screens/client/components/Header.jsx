import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdLogout } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/home")
  }
  const handleLogOut = () => {
    navigate("/")
  }


  const [isMenuClicked, setisMenuClicked] = useState(false);
  return (
    <nav className=" hover:cursor-pointer w-full h-20  px-2  py-2 flex justify-between items-center" >
      <div className="flex items-center gap-2" onClick={handleHome}>
        <img
          src="https://www.shutterstock.com/shutterstock/photos/2015198153/display_1500/stock-vector-symbol-for-a-surveyor-for-conducting-survey-cartographic-and-geodetic-works-2015198153.jpg"
          alt="photo"
          className="w-16 h-16 rounded-full object-cover"
        />
        <h2 className="text-xl text-[#FFAD33] font-semibold hidden md:block">Survey Rental</h2>
      </div>
      <div
        className="showMenu:hidden text-4xl"
        onClick={() => setisMenuClicked(true)}
      >
        <IoMenu />
      </div>
      <div className="hidden showMenu:flex items-center gap-8 mr-3 ">
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            className="w-full px-4 py-2 pr-10 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFAD33] focus:border-[#FFAD33]"
            placeholder="Search in site"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <CiSearch className="text-gray-700 " />
          </div>
        </div>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "hover:cursor-pointer border-b-2 border-b-[#FFAD33] text-[#FFAD33]"
              : "hover:cursor-pointer"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "hover:cursor-pointer border-b-2 border-b-[#FFAD33] text-[#FFAD33]"
              : "hover:cursor-pointer"
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "hover:cursor-pointer border-b-2 border-b-[#FFAD33] text-[#FFAD33]"
              : "hover:cursor-pointer"
          }
        >
          Contact
        </NavLink>
        <MdLogout className="text-5xl" onClick={handleLogOut} />
      </div>
      {isMenuClicked && (
        <div className="bg-white/80 backdrop-blur-sm min-h-screen w-[59vw] fixed right-0 top-0 z-40 flex flex-col items-start pl-4 gap-6 text-2xl">
          <RxCross1
            className="text-3xl text-black self-end m-4 cursor-pointer"
            onClick={() => setisMenuClicked(false)}
          />
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "hover:cursor-pointer text-[#FFAD33]"
                : "hover:cursor-pointer"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "hover:cursor-pointer  text-[#FFAD33]"
                : "hover:cursor-pointer"
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "hover:cursor-pointer  text-[#FFAD33]"
                : "hover:cursor-pointer"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "hover:cursor-pointer  text-[#FFAD33]"
                : "hover:cursor-pointer"
            }
          >
            Sign out
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Header;
