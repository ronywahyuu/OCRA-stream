import axios from 'axios'
import React, {useEffect, useState} from 'react'
import VideoCard from './VideoCard'

const Recommendation = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchRecommendations = async () => {
      await axios.get('/videos?page=1&size=8')
          .then((res) => {
            const {videos} = res.data.data
            setVideos(videos)
          })
    }

    fetchRecommendations()
  }, [])

  const renderedData = videos.map((video) => {
    const videoData = video.video
    const channelData = video.channel
    return <VideoCard key={videoData.id} id={videoData.id} video={videoData} channel={channelData}/>
  })


  // console.log(videos)
  return (
      <div>
        {renderedData}
      </div>
  )
}

export default Recommendation