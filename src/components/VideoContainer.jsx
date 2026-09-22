import React, { useEffect, useState } from 'react'
import Video from './Video'
import { YOUTUBE_VIDEOS_API } from '../utils/constent';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const VideoContainer = () => {
    const dispatch = useDispatch();

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    },[]);

    const getVideos = async () =>{

        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        setVideos(json.items);
    

    }
    if(videos.length === 0) return <h1>Loading...</h1>
  return (
    <div className='flex flex-wrap justify-center w-full'> 
        {
            videos.map((video) =>(<Link key={video.id} to={"/watch?v=" + video.id}><Video  video={video} /></Link>))
        }
    </div>
  )
}

export default VideoContainer