import axios from "axios";
import React, {useState} from "react";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import avatar from "../img/avatar-icon.svg"
import VideoCard from "../components/VideoCard";
import avataricon from "../img/avatar-channel.png";
import Video from "./Video";

const UserChannel = () => {
  const [channelData, setChannelData] = useState({});
  const [videoData, setVideoData] = useState({})
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  console.log(params.channelId)

  useEffect(() => {
    const fetchUserChannel = () => {
      axios
          .get(`/channel?user=1qi8BqbRFfgodLvQSxswRW&page=1&limit=10&channel=${params.channelId}`)
          .then((res) => {
            const {channel, videos} = res.data.data;
            setIsLoading(false);
            setChannelData((prevState) => {
              return {
                ...prevState,
                channel,
                videos
              };
            });
            setVideoData(prevState => {
              return {
                ...prevState,
                videos
              }
            })
            // console.log(videos)
          })
          .catch((err) => {
            console.log(err);
          });
    };
    fetchUserChannel();
  }, []);


  // const renderedData = channelData.videos.map((video) => console.log(video))

  // console.log(isLoading, channelData);

  // console.log(channelData.videos, channelData.channel);

  // console.log(channelData.videos)
  console.log(channelData.channel)


  const renderedVideos = channelData.videos?.map(v => {
    return <VideoCard video={v} channel={channelData.channel}/>
  })

  console.log(renderedVideos)


  const channelImage = channelData.channel?.profileImage === null ? avataricon : channelData.channel?.profileImage
  return (
      <>
        <div className="divide-y divide-slate-500">
          <div className="" id="top">
            {/* {channelData.channel.map} */}
            <div className=" text-center py-5">
          <span className="">
            {/*{channelData.channel.profileImage === null : }*/}
            <img src={channelImage} alt="" className="mx-auto my-3"/>
          </span>
              <h3 className="text-3xl font-bold text-white">{isLoading === false && channelData.channel.channelName}</h3>
              <p className="mb-3 text-slate-400">{isLoading === false && channelData.channel.subscriber} Subscribers</p>
              <button className="btn bg-accent">Subscribe</button>
            </div>
            <p className="uppercase text-xl text-white font-bold ml-3">Video</p>
          </div>

          <div
              className="content flex justify-around gap-2 items-center flex-wrap"
              id="videos"
          >
            {/* {isLoading === false ?  <VideoCard video={channelData.videos} channel={channelData.channel} /> : "Loading..."} */}
          </div>
        </div>

        <div className="content flex justify-around gap-2 items-center flex-wrap">
          {isLoading === false && renderedVideos}
        </div>
      </>

  );
};

export default UserChannel;
