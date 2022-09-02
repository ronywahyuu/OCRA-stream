import axios from "axios";
import React, {useState} from "react";
import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import avatar from "../img/avatar-icon.svg"
import VideoCard from "../components/VideoCard";
import avataricon from "../img/avatar-channel.png";
import Video from "./Video";
import {useSelector} from "react-redux";
import uploadIllust from "../img/upload-illustration.svg"

const UserChannel = () => {
  const [channelData, setChannelData] = useState({});
  const [videoData, setVideoData] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  const [textBtn, setTextBtn] = useState('Subscribed')

  const {currentUser} = useSelector((state) => state.user)


  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserChannel = async () => {
      await axios
          .get(`/channel?user=${currentUser?.userId}&page=1&limit=10&channel=${params.channelId}`)
          .then((res) => {
            const {channel, videos, isSubscribing} = res.data.data;
            console.log(res.data.data)
            setIsLoading(false);
            setChannelData((prevState) => {
              return {
                ...prevState,
                channel,
                videos,
                isSubscribing
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

  const handleSubscribe = async () => {
    console.log(channelData)
    try {
      if (currentUser) {
        await axios.post('/subs', {
          channelId: channelData?.channel.channelId,
          userId: currentUser?.userId
        })
            .then(res => console.log(res))
      } else {
        navigate("/auth/login")
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleUnsubscribe = async () => {
    await axios.post('/unsubs', {
      channelId: channelData.channel.channelId,
      userId: currentUser.userId
    })
        .then(res => console.log(res))
  }


  const renderedVideos = channelData.videos?.map(v => {
    return <VideoCard video={v} channel={channelData.channel}/>
  })
  const channelImage = channelData.channel?.profileImage === null ? avataricon : channelData.channel?.profileImage

  const renderButton = () => {
    if (Number(currentUser?.channelId) !== Number(params.channelId)) {
      if (channelData.isSubscribing === true) {
        return <button className="btn btn-outline btn-error" onMouseLeave={() => setTextBtn("Subscribed")}
                       onMouseEnter={() => setTextBtn('Unsubscribe')}
                       onClick={handleUnsubscribe}>{textBtn}</button>
      } else {
        return <button className="btn bg-accent" onClick={handleSubscribe}>Subscribe</button>
      }
    }
  }

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
              {renderButton()}
            </div>
            {Number(currentUser?.channelId) !== Number(params.channelId) ? (
                <p className="uppercase text-xl text-white font-bold ml-3">Video</p>
            ) : (
                <p className="uppercase text-xl text-white font-bold ml-3">My Video</p>
            )
            }
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
          {renderedVideos?.length === 0 && (
              <div className=" mt-20 flex flex-col items-center">
                <img src={uploadIllust} alt="" className="w-48"/>
                <p className=" mb-5">Upload a video to get started</p>
                <label htmlFor="my-modal-3" className="btn btn-active btn-secondary modal-button">Upload New</label>

                {/*<button type="checkbox" className="btn btn-active btn-secondary ">Upload*/}
                {/*  New*/}
                {/*</button>*/}
              </div>
          )}
        </div>

        <input type="checkbox" id="my-modal-3" class="modal-toggle"/>
        <div class="modal">
          <div class="modal-box relative">
            <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
            <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for
              free!</p>
          </div>
        </div>
      </>

  );
};

export default UserChannel;
