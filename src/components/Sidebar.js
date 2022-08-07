import React from "react";

import { HiThumbUp } from "react-icons/hi";
import { TbHistory, TbPlaylist } from "react-icons/tb";
import { FcAlarmClock } from "react-icons/fc";

import SideLink from "./SideLink";

const Sidebar = () => {
  const sideLink = [
    { label: "Playlist", path: "playlist", logo: <TbPlaylist /> },
    { label: "Likes", path: "likes", logo: <HiThumbUp /> },
    { label: "Watch later", path: "watchlater", logo: <FcAlarmClock /> },
    { label: "History", path: "history", logo: <TbHistory /> },
  ];
  return (
    <>
      <div
        className="border-2 md:max-w-3/4  mx-auto rounded-lg text-white
         bg-slate-600 md:flex md:flex-col gap-10 p-4 py-5
       md:justify-start md:text-left md:h-[650px] font-bold font-serif"
      >
        {sideLink.map((item, index) => {
          return <SideLink key={index} data={item} />;
        })}
      </div>
    </>
  );
};

export default Sidebar;
