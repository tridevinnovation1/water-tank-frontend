import React from 'react'
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { MdLogout, MdOutlineDashboardCustomize } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
// import { IoSettings } from "react-icons/io5";



const Menu = () => {
  const navigate = useNavigate()
  const handleLogOut = () => {
    console.log("logout")
    navigate("/")
  }
  return (
    <div className='w-52 h-screen bg-[#FFAD33] flex flex-col pl-10 '>
      <h2 className='text-2xl font-medium pt-5 mb-4 '>Rentify</h2>
      <NavLink
        // to="/home"
        className={'flex items-center my-3 gap-3 text-lg'}
      // className={({ isActive }) =>
      //   isActive
      //     ? "hover:cursor-pointer border-b-2 border-b-[#FFAD33] text-[#FFAD33]"
      //     : "hover:cursor-pointer"
      // }
      >
        <MdOutlineDashboardCustomize /> Dashboard
      </NavLink>
      <NavLink className={'flex items-center my-3 gap-3 text-lg'}> <MdOutlineShoppingCart /> Orders</NavLink>
      <NavLink className={'flex items-center my-3 gap-3 text-lg'}><FaUsers />Customers</NavLink>
      <NavLink className={'flex items-center my-3 gap-3 text-lg'}> <HiOutlineHome />Home</NavLink>
      <NavLink className={'flex  items-center my-[26rem] gap-3 text-lg'}><MdLogout className="text-5xl" onClick={handleLogOut} />Logout</NavLink>
    </div>
  )
}

export default Menu