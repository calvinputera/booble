import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { url: "/search", text: "🔎 All" },
  { url: "/news", text: "📰 News" },
  { url: "/image", text: "🖼 Images" },
  { url: "/videos", text: "🎬 Videos" },
];

const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text }) => (
        <NavLink
          to={url}
          className="focus:text-blue-700 focus:border-blue-700 border-b dark:border-b-gray-800 dark:focus:border-b-blue-400 dark:text-gray-400 dark:focus:text-blue-400 pb-2"
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
