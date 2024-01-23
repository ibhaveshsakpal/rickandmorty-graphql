import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-start items-center">
          <Link to="/" className="text-white text-lg font-bold">
            Home
          </Link>
          <Link to="/search" className="text-white text-lg font-bold ml-4">
            Search
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
