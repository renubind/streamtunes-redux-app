import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaGithub, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "../components/redux/slices/VideoSlice";
import { useSelector } from "react-redux";
import Categories from "../components/Categories";

const Main = () => {
  const dispatch = useDispatch();

  const categoriesList = useSelector((store) => store.videos.categoriesArr);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <>
      <div className="  text-center m-0 p-0  ">
        <Navbar />
        <div
          className="  grid  place-content-center gap-4 border-2  md:max-w-[1580px]
         m-0 bg-[url('/public/banner.jpg')] bg-cover w-full h-[450px] "
        >
          <h1 className=" text-5xl font-bold text-white">
            Stream and Jam to your Favorite Tunes
          </h1>
          <Link
            to="explore"
            className=" bg-red-600  font-bold text-2xl text-white p-2   w-[200px]"
          >
            Watch Now
          </Link>
        </div>
        <div>
          <h1 className="text-5xl font-serif font-extrabold mt-20">
            Categories
          </h1>
          <div className="flex text-center gap-5 mx-40  my-20 items-center w-[600px] h-[200px] ">
            {categoriesList.map((item) => (
              <Categories key={item._id} data={item} />
            ))}
          </div>
        </div>
        <footer
          className=" flex gap-5 justify-center items-center w-full h-16 bg-gray-500 border-t-2 border-white
            fixed left-0 bottom-0 font-bold text-xl"
        >
          <h1>FOLLOW SOCIAL MEDIA LINK </h1>

          <div className="flex flex-row gap-2">
            <FaTwitter />
            <FaGithub />
            <FaLinkedin />
            <FiMail />
            <FaFacebookF />
          </div>
        </footer>
      </div>
    </>
  );
};

export default Main;
