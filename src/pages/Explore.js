import React, { useEffect } from "react";
import Video from "../components/Video";
import { useSelector, useDispatch } from "react-redux";
import {
  changeDummyTextValue,
  getVideos,
} from "../components/redux/slices/VideoSlice";

const Explore = () => {
  const dispatch = useDispatch();

  const videos = useSelector((store) => store.videos.videosArr);
  useEffect(() => {
    dispatch(getVideos());
  }, [dispatch]);

  const dummyText = useSelector((store) => store.videos.dummyText);

  return (
    <>
      <div className="border-2 flex gap-5 p-3  cursor-pointer font-serif font-bold ">
        <button className="border-2 p-1  rounded-full border-red-500 w-40  hover:bg-red-500">
          All
        </button>
        <button className="border-2  hover:bg-red-500  p-1 rounded-full border-red-500 w-40">
          Indian Classical
        </button>
        <button className="border-2  hover:bg-red-500 p-1 rounded-full border-red-500 w-40">
          Indie India
        </button>
        <button className="border-2  hover:bg-red-500  p-1 rounded-full border-red-500 w-40">
          English Pop
        </button>
        <button className="border-2  hover:bg-red-500  p-1 rounded-full border-red-500 w-40">
          Pop Mixs
        </button>
      </div>

      <div>
        <h3>hello={dummyText}</h3>
        <button
          className="border-2  m-5 font-bold  hover:bg-red-500  p-1 rounded-full border-red-500 w-40"
          onClick={() => dispatch(changeDummyTextValue())}
        >
          click here
        </button>
      </div>

      <div
        className=" text-xl font-semibold h-[600px] p-1
      bg-slate-900  text-center flex flex-wrap  rounded-lg overflow-y-scroll "
      >
        {videos.map((item) => (
          <Video key={item._id} data={item} />
        ))}
      </div>
    </>
  );
};

export default Explore;
