import React from "react";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";
import { MdKeyboardVoice } from "react-icons/md";
// import { FcMusic } from "react-icons/fc";
import { FaHeadphonesAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="border-2 font-bold bg-slate-600 text-white py-1 mx-auto md:flex md:justify-around md:items-baseline">
        <h1 className="text-4xl font-serif font-bold text-red-500 rounded-lg flex text-left  items-start">
          <FaHeadphonesAlt /> Stream <span className="text-black"> tubes</span>
        </h1>
        <div className=" w-[200]  flex flex-row items-center  ">
          <input
            className="p-2 border-none "
            type="text"
            placeholder="search"
          />
          <label className=" text-xl border-2 w-[150]  p-2 bg-gray-400  hover:text-red-500">
            <BsSearch />
          </label>
          <label className=" text-4xl  hover:text-red-500">
            <MdKeyboardVoice />
          </label>
        </div>
        <div className="flex gap-5 text-xl font-serif">
          <div className=" flex flex-row  ">
            <Link
              className=" flex flex-row items-center  hover:text-red-500 "
              to={"/"}
            >
              <HiHome />
              Home
            </Link>
          </div>
          <Link className=" hover:text-red-500" to={"explore"}>
            Explore
          </Link>
          <Link
            className=" flex flex-row items-center  font-bold  hover:text-red-500"
            to={"mockapi"}
          >
            Login
            <AiOutlineLogin />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
