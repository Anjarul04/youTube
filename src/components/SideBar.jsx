import React from "react";
import home from "../assets/home.png";
import video from "../assets/video.png";
import channel from "../assets/channel.png";
import history from "../assets/history.png";
import playlist from "../assets/playlist.png";
import clock from "../assets/clock.png";
import like from "../assets/like.png";
import youtube from "../assets/youtube.png";
import download from "../assets/download.png";
import learning from "../assets/learning.png";
import { Link } from "react-router-dom";

const SideBar = () => {
  const menuItems = [
    { name: "Home", icon: home, path: "/" },
    { name: "Shorts", icon: video },
    { name: "Your Channel", icon: channel },
    { name: "History", icon: history },
    { name: "Playlists", icon: playlist },
    { name: "Watch Later", icon: clock },
    { name: "Liked Videos", icon: like },
    { name: "Your Videos", icon: youtube },
    { name: "Downloads", icon: download },
    { name: "Courses", icon: learning },
  ];

  return (
    <aside
      className="
        w-16 sm:w-20 md:w-56 lg:w-60
        h-[calc(100vh-64px)]
        bg-gray-100
        px-2 md:px-4 py-4
        overflow-y-auto overflow-x-hidden
        shrink-0
      "
    >
      <ul className="space-y-2">
        {menuItems.slice(0, 2).map((item) => (
          <li key={item.name}>
            <Link
              to={item.path || "#"}
              title={item.name}
              className="
                flex flex-col md:flex-row
                items-center justify-center md:justify-start
                gap-1 md:gap-4
                rounded-lg py-3 px-1 md:px-3
                hover:bg-gray-200 transition-colors
              "
            >
              <img className="w-6 h-6 shrink-0" src={item.icon} alt="" />
              <span className="hidden md:block text-sm lg:text-base">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <hr className="border-gray-300 my-4" />

      <ul className="space-y-2">
        {menuItems.slice(2).map((item) => (
          <li key={item.name}>
            <button
              type="button"
              title={item.name}
              className="
                w-full flex flex-col md:flex-row
                items-center justify-center md:justify-start
                gap-1 md:gap-4
                rounded-lg py-3 px-1 md:px-3
                hover:bg-gray-200 transition-colors
              "
            >
              <img className="w-6 h-6 shrink-0" src={item.icon} alt="" />
              <span className="hidden md:block text-sm lg:text-base text-left">
                {item.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
