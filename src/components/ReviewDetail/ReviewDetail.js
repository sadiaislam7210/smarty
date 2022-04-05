import React from "react";

const ReviewDetail = (props) => {
  const { Name, Rating, image, Comment } = props.product;
  return (
    <div className="">
      {/* <div className="w-1/4 ml-32">
        <img src={image} alt="" />
      </div>
      <div className="w-2/3">
        <h3 className="text-2xl font-bold ">Name: {Name}</h3>
        <h4 className="text-xl font-semibold ">Ratings: {Rating}</h4>
        <p className="text-xl">Comment: {Comment}</p>
      </div> */}

      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src={image} alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Name: {Name}</div>
          <p class="text-gray-700 font-bold text-xl ">Rating: {Rating}</p>
          <p class="text-gray-700 text-base">
            <h1 className="font-bold">Comment:</h1> {Comment}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetail;
