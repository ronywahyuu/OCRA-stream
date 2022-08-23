import axios from "axios";
import React, {useEffect, useState} from "react";
import Banner from "../components/Banner";
import VideoCard from "../components/VideoCard";
import {nanoid} from "nanoid";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      await axios
          .get("/videos?page=1&size=10", {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          })
          .then((res) => {
            const {videos} = res.data.data;
            setVideos(videos);
            // setVideos(prevState=>{
            //   return {
            //     ...prevState,
            //     videos
            //   }
            // })
          });
    };

    fetchVideos();
  }, []);

  const renderedData = videos.map((video) => {
    const videoData = video.video;
    const channelData = video.channel;
    return (
        <VideoCard key={nanoid()} video={videoData} channel={channelData}/>
    );
  });
  // videos.map((video)=>{
  //   console.log(video.video)
  // })
  return (
      <div className="">
        <Banner/>
        <div className="content flex justify-around gap-2 items-center flex-wrap">
          {videos.length > 0 ? (
              renderedData
          ) : (
              <button className="btn btn-square loading mt-5"></button>
          )}
        </div>
      </div>
  );
};

export default Home;
