import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import VideoCard from '../components/VideoCard'

const Home = () => {
  const [videos, setVideos] = useState([])
  
  // useEffect(()=>{
  //   const fetchVideos = async() =>{
  //     const res = await axios.get('https://jsonplaceholder.typicode.com/photos',{
  //       headers : {
  //         'Access-Control-Allow-Origin': '*',
  //       }
  //     });
  //     console.log(res)
  //   }
  //   fetchVideos()
  // },[])

  
  useEffect(()=>{
    const fetchVideos = async () =>{
      await axios.get('/videos?page=1&size=8',{
        headers : {
          'Access-Control-Allow-Origin': '*',
        }
      })
        .then((res)=>{
          const {videos} = res.data.data
          setVideos(videos)
        })
    }

    fetchVideos()
  },[])


  console.log(videos)
  const renderedData = videos.map((video)=>{
    const videoData = video.video
    const channelData = video.channel
    return <VideoCard key={videoData.id} video={videoData} channel={channelData}/>
  })
  // videos.map((video)=>{
  //   console.log(video.video)
  // })
  return (
    <div className="">
      <Banner/>
      <div className="content flex justify-around gap-2 items-center flex-wrap">
        {renderedData}

      </div>

    </div>
  )
}

export default Home