import axios from "axios";
import React, {useEffect, useRef, useState} from "react";
import ReactPlayer from "react-player/lazy";
import {Link, useParams} from "react-router-dom";
import Banner from "../components/Banner";
import Recommendation from "../components/Recommendation";
import "./Player.css";
import {
  BeakerIcon,
  ClockIcon,
  ShareIcon,
  ThumbDownIcon,
  ThumbUpIcon,
  UserCircleIcon,
  UserIcon
} from "@heroicons/react/outline";
import {useDispatch, useSelector} from "react-redux";
import Comment from "../components/Comment";
import {dislikeVideo, fetchVideoStart, fetchVideoSuccess, likeVideo} from "../redux/videoSlice";
// import {ThumbUpIcon} from "@heroicons/react/solid"

const Video = () => {
  const [liked, setLiked] = useState(null)
  const [disliked, setDisliked] = useState(null)
  const [video, setVideo] = useState([])
  const [channel, setChannel] = useState({})
  const videoRef = useRef(null);
  let params = useParams()
  const {currentUser} = useSelector((state) => state.user)
  const videoStore = useSelector((state) => state.video)

  const dispatch = useDispatch()
  const likesCount = videoStore.currentVideo.likesCount
  const dislikesCount = videoStore.currentVideo.dislikesCount

  useEffect(() => {
    const fetchSingleVid = async () => {
      dispatch(fetchVideoStart())
      await axios.get(`/video?video=${params.id}&user=${currentUser.userId}`)
          .then((res) => {
            const {video, channel, isLikeVideo, isDislikeVideo, isSubscribe} = res.data.data
            const videoData = {
              ...video, isLikeVideo, isDislikeVideo, isSubscribe
            }
            dispatch(fetchVideoSuccess(videoData))
            // setVideo(videoData)
            setChannel(res.data.data.channel)
          })
    }
    fetchSingleVid()

  }, [liked])

  // console.log(video.isLikeVideo)

  const video1 =
      "https://firebasestorage.googleapis.com/v0/b/uas-a80da.appspot.com/o/SawanoHiroyuki%5BnZk%5D-Aimer%20-%20S-ave%20ft.%20Aimer.mp4?alt=media&token=2ddb55e9-e172-4fc0-a7b9-3cd215245fc1";
  const video2 = "https://www.youtube.com/watch?v=pbMwTqkKSps";
  const video3 = "https://www.youtube.com/watch?v=tutZKLeGrCs"


  // console.log(`is liked video : ${videoStore.currentVideo.isLikeVideo}`)
  // console.log(`is disliked video : ${videoStore.currentVideo.isDislikeVideo}`)
  // console.log(`is liked video : ${video.isLikeVideo}`)
  // console.log(`is subscribing : ${videoStore.currentVideo}`)
  // console.log(videoStore.currentVideo)
  const handleLike = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/like', {
        "userId": currentUser.userId,
        "videoId": params.id
      }).then(res => {
        setLiked(true)
        console.log(res);
      }).catch(err => console.log(err))
    } catch (err) {
      console.log(err)
    }
  }

  const handleDeleteLike = async (e) => {
    e.preventDefault()
    try {
      await axios.delete('/like', {
        "userId": currentUser.userId,
        "videoId": params.id
      }).then(res => {
        setLiked(false)
        console.log(res)
      })
    } catch (e) {
      console.log(e)
    }
  }

  const handleDislike = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/dislike', {
        "userId": currentUser.userId,
        "videoId": params.id
      }).then(res => {
        // dispatch(dislikeVideo(res.status))
        setLiked(false)
        console.log(res.data.status)
      }).catch(err => {
        console.log(err.response.status)
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
      <div id="videoContainer" className="flex justify-around flex-wrap">
        <div id="leftSection" className=" w-3/4 mt-4 ">
          <div id="leftWrapper" className=" ">
            <div id="videoWrapper" className="">
              <ReactPlayer
                  ref={videoRef}
                  className="react-player"
                  height="500px"
                  width="1000px"
                  url={videoStore.currentVideo?.videoUrl}
                  controls
                  onClickPreview={() => console.log("clicked")}
              />
              {/*<iframe*/}
              {/*    className="react-player"*/}
              {/*    src={video.videoUrl}*/}
              {/*    height="500px"*/}
              {/*    width="1000px"*/}
              {/*    title="YouTube video player"*/}
              {/*    frameborder="0"*/}
              {/*    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
              {/*    allowfullscreen*/}
              {/*></iframe>*/}
              {/*{" "}*/}
            </div>

            <div aria-label="video-detail-info" className="mt-2">
              <div aria-label="video-detail-text">
                <div aria-label="video-detail-title-action" className="flex justify-between">
                  <h3 className="text-xl font-medium">{videoStore.currentVideo?.videoTitle}</h3>

                  <div aria-label="video-detail-action" className="flex gap-3">
                    <div className="flex items-center gap-1" aria-label="video-likes">
                      {!videoStore.currentVideo.isLikeVideo ? (
                          <span onClick={handleLike}>
                            <ThumbUpIcon className="w-6 h-6 text-white cursor-pointer"/>
                          </span>
                      ) : (
                          <span onClick={handleDeleteLike}>
                            <svg onClick={handleDeleteLike} xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24" fill="currentColor"
                                 className="w-6 h-6 cursor-pointer">
                              <path
                                  d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z"/>
                            </svg>
                          </span>
                      )}
                      {videoStore.currentVideo?.likesCount}
                    </div>
                    <div className="flex items-center gap-1" aria-label="video-dislikes">
                      <span onClick={handleDislike}>
                        {!videoStore.currentVideo.isDislikeVideo ? (
                            <ThumbDownIcon className="w-6 h-6 text-white cursor-pointer"/>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="w-6 h-6 cursor-pointer">
                              <path
                                  d="M15.73 5.25h1.035A7.465 7.465 0 0118 9.375a7.465 7.465 0 01-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 01-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.498 4.498 0 00-.322 1.672V21a.75.75 0 01-.75.75 2.25 2.25 0 01-2.25-2.25c0-1.152.26-2.243.723-3.218C7.74 15.724 7.366 15 6.748 15H3.622c-1.026 0-1.945-.694-2.054-1.715A12.134 12.134 0 011.5 12c0-2.848.992-5.464 2.649-7.521.388-.482.987-.729 1.605-.729H9.77a4.5 4.5 0 011.423.23l3.114 1.04a4.5 4.5 0 001.423.23zM21.669 13.773c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.959 8.959 0 01-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227z"/>
                            </svg>
                        )}
                      </span>
                      {videoStore.currentVideo?.dislikesCount}
                    </div>
                    <div className="flex items-center gap-1" aria-label="video-shares">
                      <ShareIcon className="w-6 h-6 text-white cursor-pointer"/>
                      <p>Share</p>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer" aria-label="video-watch-later">
                      <ClockIcon className="w-6 h-6 text-white "/>
                      <p>Watch Later</p>
                    </div>
                  </div>
                </div>
                <div aria-label="video-detail-views" className="flex gap-10">
                  <p className="text-slate-400">{videoStore.currentVideo?.viewsCount} {videoStore.currentVideo?.viewsCount === 0 ? "view" : "views"}</p>
                  <p className="text-slate-400">{new Date(Number(videoStore.currentVideo?.createdAt)).toLocaleDateString()}</p>
                </div>
                <div aria-label="video-detail-desc" className="flex gap-60">
                  <p>igrighribt</p>
                  <span>Read More...</span>
                </div>
              </div>

              <div aria-label="video-detail-channel"
                   className="border flex items-center justify-between p-2 rounded-md">
                <Link to={`/video/c/${videoStore.currentVideo.channelId}`}>
                  <div className="flex gap-1 items-center">
                    <UserCircleIcon className="w-14 h-14 text-white cursor-pointer"/>
                    <div className="">
                      <p className="m-0 p-0 text-white">{channel?.channelName}</p>
                      <p className="m-0 p-0 text-slate-400">63 Subsribers</p>
                    </div>
                  </div>
                </Link>
                <button className="btn btn-error">Subscribe</button>
              </div>

            </div>

          </div>

          <Comment videoId={params.id}/>
        </div>
        <div id="rightSection">
          {/*<Recommendation/>*/}
        </div>
      </div>
  );
};

const playerStyle = {
  width: "100%",
};

export default Video;
