import React, {useEffect, useState} from "react";
import {UserCircleIcon} from "@heroicons/react/outline";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import TimeAgo from "javascript-time-ago";

const Comment = ({videoId}) => {
  const [comment, setComment] = useState([]);
  const [commentText, setCommentText] = useState('')
  const [commentLength, setCommentLength] = useState(0)
  const {currentUser} = useSelector((state) => state.user)
  const {currentVideo} = useSelector((state) => state.video)

  const en = require("javascript-time-ago/locale/en");

  TimeAgo.addLocale(en);

  const timeAgo = new TimeAgo("en-US");


  useEffect(() => {
    const fetchComment = async () => {
      await axios.get(`/comment?video=${videoId}&page=1&limit=100`)
          .then(res => {
            setCommentLength(res.data.data.length)
            setComment(res.data.data)

          }).catch(err => console.log(err))
    }
    fetchComment()


  }, [commentLength])


  const handleAddComment = async (e) => {
    e.preventDefault()
    console.log(commentText)
    try {
      await axios.post('/comment', {
        "videoId": currentVideo.videoId,
        "channelId": currentUser.channelId,
        "comment": commentText
      }).then((res) => {

        console.log(res.data.data)
      })
    } catch (e) {
      console.log(e)
    }
    console.log('added comment')
  }
  // console.log(comment[0].comment)

  const renderComment = comment.map((c) => {
    return (
        <div aria-label="comment-card" className="flex gap-1 items-center mt-5">
          <UserCircleIcon className="w-14 h-14 text-white cursor-pointer"/>
          <div className="">
            <p className="m-0 p-0 text-white font-medium">{c.channel?.channelName} <span
                className="text-sm ml-3 text-slate-400"
                aria-label="comment-time">{timeAgo.format(new Date(Number(c.comment?.createdAt)))}</span>
            </p>
            <p className="m-0 p-0 text-gray-300">{c.comment?.comment}</p>
          </div>
        </div>
    )
  })

  const CommentCard = () => {
    return (
        <div aria-label="comment-card" className="flex gap-1 items-center mt-5">
          <UserCircleIcon className="w-14 h-14 text-white cursor-pointer"/>
          <div className="">
            <p className="m-0 p-0 text-white font-medium">"{comment.channel?.channelName} "<span
                className="text-sm ml-3 text-slate-400"
                aria-label="comment-time">2 Weeks ago</span>
            </p>
            <p className="m-0 p-0 text-gray-300">"{comment.comment?.comment}"</p>
          </div>
        </div>
    )
  }

  return (
      <div aria-label="video-comments" className="mt-5 gap-6">
        <p>{commentLength} Comments</p>

        <form action="" onSubmit={handleAddComment} className="flex items-center mt-3 gap-2">
          <label htmlFor="">
            <UserCircleIcon className="w-14 h-14 text-white cursor-pointer"/>
          </label>
          <input
              type="text"
              placeholder="Add a comment..."
              className="input input-bordered w-full "
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
          />
        </form>
        {comment && renderComment}
      </div>
  )
}

export default Comment