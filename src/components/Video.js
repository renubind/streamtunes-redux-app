import React from "react";
import { FaUsers } from "react-icons/fa";

const Video = ({ data }) => {
  const { title, creator, views, dateAdded } = data;
  const creatorName = creator
    .split(" ")
    .map((creator) => creator[0])
    .join("")
    .toUpperCase();
  return (
    <>
      <div className="border-2 m-2 py-5 bg-white  w-[23rem] rounded-lg border-gray-600">
        <div>
          <img
            className="w-[30rem] h-[250px]  object-cover  cursor-pointer  "
            src=" https://source.unsplash.com/random"
            alt="image1"
          />
          <div
            className="title border-2 rounded-lg  bg-indigo-500 opacity-50       
             w-[22.8rem] font-bold  text-center"
          >
            {title}
          </div>
        </div>

        <div className="flex justify-left  items-center">
          <p className="rounded-full border-4 w-16 h-16 grid place-content-center  bg-gray-500 text-black">
            {creatorName}
          </p>
          <div>{creator}</div>
        </div>
        <div className="flex gap-10 justify-around ">
          <p className="flex flex-row gap-2 items-center text-gray-600">
            {" "}
            <FaUsers />
            {views}
          </p>
          <p> {dateAdded}</p>
        </div>
      </div>
    </>
  );
};

export default Video;
