import React from "react";
import { Link } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import ReviewDetail from "../ReviewDetail/ReviewDetail";
// import Image from "../../../public/tv-photo.jpg";

const Home = () => {
  const [cart, setCart] = useReviews();
  const result = cart.slice(0, 3);
  return (
    <div className="mb-8">
      <div className="grid md:grid-cols-2 sm:grid-cols-1">
        <div className="text-container">
          <h1 className="text-6xl font-bold p-4">Television is a media of</h1>
          <h1 className="text-6xl font-bold text-blue-600 p-4">
            Mass communication.
          </h1>
          <p className="text-xl mt-4">
            Smart Television not only provides many types of programs with
            interesting and broad content, but it also serves to fulfill our
            needs in terms of entertainment and knowledge. Everything has its
            merits and demerits. But it is the most up-to-date means of
            communication
          </p>
          <button className="border-solid bg-slate-400 px-6 py-4 rounded  mt-4">
            Live Demo
          </button>
        </div>

        <div className="img-container">
          <img
            src="http://thetrendler.com/wp-content/uploads/2017/07/sonys85c-1l.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="review-container mt-16">
        <h1 className="text-5xl font-bold mb-8">Customer Reviews(3)</h1>
        <div className="grid md:grid-cols-3 mb-8">
          {result.map((product) => (
            <ReviewDetail key={product.id} product={product}></ReviewDetail>
          ))}
        </div>
        <Link
          className="rounded bg-sky-800 p-2 text-xl text-white"
          to={`/reviews`}
        >
          Reviews All
        </Link>
      </div>
    </div>
  );
};

export default Home;
