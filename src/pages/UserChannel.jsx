import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard";
// import avataricon from "../img/";

const UserChannel = () => {
  const [channelData, setChannelData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  // console.log(params.channelName)

  useEffect(() => {
    const fetchUserChannel =  () => {
       axios
        .get("/channel?user=1qi8BqbRFfgodLvQSxswRW&page=1&limit=10&channel=90")
        .then((res) => {
          const { channel, videos } = res.data.data;
          setIsLoading(false);
          setChannelData((prevState) => {
            return {
              ...prevState,
              channel,
              videos,
            };
          });
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

  console.log(channelData.videos)
  console.log(channelData.channel)
  // const {channelName} = channelData
  // console.log(channelData.channel.channelName === "undefined")

  return (
    <div className="divide-y divide-slate-500">
      <div className="" id="top">
        {/* {channelData.channel.map} */}
        <div className=" text-center py-5">
          <span className="">
            <svg
              aria-label="avatar-icon"
              width="100"
              height="100"
              viewBox="0 0 144 143"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto  my-3"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M97.8337 52.125C97.8337 58.9764 95.1119 65.5472 90.2673 70.3919C85.4226 75.2366 78.8518 77.9583 72.0003 77.9583C65.1489 77.9583 58.5781 75.2366 53.7334 70.3919C48.8887 65.5472 46.167 58.9764 46.167 52.125C46.167 45.2735 48.8887 38.7027 53.7334 33.858C58.5781 29.0133 65.1489 26.2916 72.0003 26.2916C78.8518 26.2916 85.4226 29.0133 90.2673 33.858C95.1119 38.7027 97.8337 45.2735 97.8337 52.125ZM84.917 52.125C84.917 55.5507 83.5561 58.8361 81.1338 61.2584C78.7114 63.6808 75.426 65.0416 72.0003 65.0416C68.5746 65.0416 65.2892 63.6808 62.8669 61.2584C60.4445 58.8361 59.0837 55.5507 59.0837 52.125C59.0837 48.6992 60.4445 45.4138 62.8669 42.9915C65.2892 40.5692 68.5746 39.2083 72.0003 39.2083C75.426 39.2083 78.7114 40.5692 81.1338 42.9915C83.5561 45.4138 84.917 48.6992 84.917 52.125Z"
                fill="#F8F8F8"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M72.0002 0.458313C32.7658 0.458313 0.958496 32.2656 0.958496 71.5C0.958496 110.734 32.7658 142.542 72.0002 142.542C111.235 142.542 143.042 110.734 143.042 71.5C143.042 32.2656 111.235 0.458313 72.0002 0.458313ZM13.8752 71.5C13.8752 84.9979 18.48 97.4237 26.1977 107.292C31.6177 100.174 38.6099 94.4061 46.6282 90.4378C54.6464 86.4696 63.4735 84.4089 72.4199 84.4166C81.2506 84.4083 89.9667 86.4156 97.9041 90.2859C105.841 94.1561 112.791 99.787 118.222 106.75C123.818 99.4103 127.586 90.8441 129.214 81.7596C130.842 72.6752 130.283 63.3336 127.584 54.508C124.885 45.6824 120.123 37.6263 113.692 31.0065C107.261 24.3866 99.3464 19.3932 90.6026 16.4395C81.8589 13.4858 72.5375 12.6566 63.4097 14.0206C54.2819 15.3846 45.6101 18.9026 38.1118 24.2834C30.6135 29.6643 24.5044 36.7533 20.2898 44.964C16.0752 53.1746 13.8763 62.2708 13.8752 71.5ZM72.0002 129.625C58.6569 129.645 45.7165 125.055 35.3685 116.631C39.5337 110.668 45.0775 105.8 51.5285 102.44C57.9794 99.08 65.1465 97.3281 72.4199 97.3333C79.6027 97.3276 86.6831 99.0355 93.0732 102.315C99.4634 105.595 104.979 110.352 109.161 116.192C98.7331 124.889 85.5793 129.644 72.0002 129.625Z"
                fill="#F8F8F8"
              />
            </svg>
          </span>
          <h3 className="text-3xl font-bold text-white">{"channelData.channel.channelName"}</h3>
          <p className="mb-3 text-slate-400">{"subscriber"} Subscribers</p>
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
  );
};

export default UserChannel;