import React from "react";
import { Link } from "react-router-dom";
const VideoCard = () => {
  return (
    <Link to="/video/1">
      <div className="card card-compact w-80 bg-base-100 shadow-xl mt-6 duration-200 hover:scale-110 cursor-pointer">
        <figure className="relative">
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          <span className="absolute right-0 bottom-0 p-3 font-bold">4:30</span>
        </figure>
        <div className="card-body flex flex-row">
          {/* youtube info */}
          <figure>
            <div className="avatar">
              <div className="w-6 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
          </figure>
          <div className="detail-video">
            <h2 className="card-title">Video Title</h2>
            <div className="info">
              <p className="text-slate-400">Channel Name</p>
              <p className="text-slate-400">320K views | 3 hours ago</p>
            </div>
          </div>
          {/* <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
