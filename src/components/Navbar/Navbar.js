import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-2xl p-4">
      <Link to="/" className="mx-4 text-sky-600">
        Home
      </Link>
      <Link to="reviews" className="mx-4 text-sky-600">
        Reviews
      </Link>
      <Link to="dashboard" className="mx-4 text-sky-600">
        Dashboard
      </Link>
      <Link to="blogs" className="mx-4 text-sky-600">
        Blogs
      </Link>
      <Link to="about" className="mx-4 text-sky-600">
        About
      </Link>
    </div>
  );
};

export default Navbar;
