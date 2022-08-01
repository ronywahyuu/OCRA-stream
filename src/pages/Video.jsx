import React, { useRef } from "react";
import ReactPlayer from "react-player/lazy";
import Banner from "../components/Banner";
import Recommendation from "../components/Recommendation";
import "./Player.css";

const Video = ({ iconColor }) => {
  const [liked, setLiked] = React.useState(true);

  const videoRef = useRef(null);

  console.log(videoRef);
  const video1 =
    "https://firebasestorage.googleapis.com/v0/b/uas-a80da.appspot.com/o/SawanoHiroyuki%5BnZk%5D-Aimer%20-%20S-ave%20ft.%20Aimer.mp4?alt=media&token=2ddb55e9-e172-4fc0-a7b9-3cd215245fc1";
  const video2 = "https://www.youtube.com/watch?v=pbMwTqkKSps";
  const video3 = "https://www.youtube.com/watch?v=tutZKLeGrCs"
  return (
    <div id="videoContainer" className="flex justify-around flex-wrap">
      <div id="leftSection" className=" w-3/4 mt-4 ">
        <div id="leftWrapper" className=" ">
          <div id="videoWrapper" className="">
            <ReactPlayer
              ref={videoRef}
              className="react-player"
              height= "500px"
              width= "1000px"
              url={video3}
              controls
              onClickPreview={() => console.log("clicked")}
            />
            {/* <iframe
              className="react-player"
              src="https://www.youtube.com/embed/tutZKLeGrCs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>{" "} */}
          </div>
          <div id="videDetailInfo" className="flex items-center ">
            <div tabindex="0" class="collapse flex-1 ">
              <div class="collapse-title text-xl font-medium flex justify-between items-center">
                <p>How to build web app</p>
                <span className="text-slate-600 text-sm">Read More..</span>
              </div>
              <div class="collapse-content">
                <p>
                  tabindex="0" attribute is necessary to make the div focusable
                </p>
              </div>
            </div>

            <div
              id="videoDetailAction"
              className="flex border justify-between gap-9"
            >
              <div id="item" className="flex items-center">
                <box-icon name="like" color="#ffffff"></box-icon> 2,1K
              </div>
              <div id="item" className="flex items-center">
                <box-icon name="dislike" color="#ffffff"></box-icon> 10K
              </div>
              <div id="item" className="flex items-center">
                <box-icon
                  name="share"
                  flip="horizontal"
                  color="#ffffff"
                ></box-icon>{" "}
                Share
              </div>
              <div id="item" className="flex items-center">
                <box-icon name="time-five" color="#ffffff"></box-icon> Watch
                Later
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="rightSection">
        <Recommendation />
      </div>
    </div>
  );
};

const playerStyle = {
  width: "100%",
};

export default Video;
