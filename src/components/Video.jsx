import React from 'react'

const Video = ({ video }) => {
  return (
    <div className='p-2 m-2 w-90 shadow-lg cursor-pointer'>
      
        <img className='w-full h-auto rounded-xl' src={video?.snippet?.thumbnails?.medium?.url} alt={video?.snippet?.title} />
      
        <h2 className='m-1 font-bold'>
          {video?.snippet?.title}
        </h2>
        <div className="">
            <h3 className='m-1 text-sm text-gray-600 cursor-pointer'>
          {video?.snippet?.channelTitle}
        </h3>
        <h4 className='m-1 text-lg font-semibold'>
          {video?.statistics?.viewCount} views
        </h4>
        </div>
    </div>
  )
}

export default Video