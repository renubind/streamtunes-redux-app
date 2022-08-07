import React from "react";
import { Link } from "react-router-dom";
const SideLink = ({ data }) => {
  const { label, path, logo } = data;
  return (
    <>
      <div>
        <Link
          className="flex flex-row justify-between items-center text-xl "
          to={path}
        >
          {label}
          {logo}
        </Link>
      </div>
    </>
  );
};

export default SideLink;
