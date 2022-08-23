import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";
import TimeAgo from "javascript-time-ago";
import axios from "axios";

const VideoCard = ({video, channel}) => {
  const params = useParams()
  const en = require("javascript-time-ago/locale/en");

  TimeAgo.addLocale(en);

  const timeAgo = new TimeAgo("en-US");


  // console.log(video, channel)
  // const fetchDetail = async () =>{
  //   await axios.get('/video?id=qtUhUPquCDF')
  //     .then((res)=>{
  //       console.log(res)
  //     })
  // }

  // console.log(channel)
  return (
      <Link to={`video/${video?.videoId}`}>
        <div className="card card-compact w-80 bg-base-100 shadow-xl mt-6 duration-200 hover:scale-110 cursor-pointer">
          <figure className="relative">
            <img src={video?.videothumbnail} className="w-96 h-48" alt="Shoes"/>
            <span className="absolute right-0 bottom-0 p-3 font-bold">4:30</span>
          </figure>
          <div className="card-body flex flex-row">
            {/* youtube info */}
            <figure>
              <div className="avatar">
                <div className="w-6 rounded-full">
                  <img src="https://placeimg.com/192/192/people"/>
                </div>
              </div>
            </figure>
            <div className="detail-video">
              <h2 className="card-title">{video?.videoTitle}</h2>
              <div className="info">
                <Link to={`video/c/${channel?.channelId}`}>
                  <p className="text-slate-400 hover:text-sky-700">{channel?.channelName}</p>
                </Link>
                <p className="text-slate-400">
                  {video?.viewsCount} views | {timeAgo.format(new Date(Number(video?.createdAt)))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
  );
};

export default VideoCard;
