import React from "react";

const RecomendVideos = ({ video }) => {
  return (
    <div className="flex p-2 m-2 shadow-lg w-full cursor-pointer overflow-hidden">
      
      <img
        className="w-90 h-50 rounded-xl object-cover"
        src={video?.snippet?.thumbnails?.medium?.url}
        alt={video?.snippet?.title}
      />

      <div className="mx-4 my-2 flex-1">
        <h2 className="text-xl font-semibold">
          {video?.snippet?.title}
        </h2>

        <h4 className="text-gray-600 mt-2">
          {video?.snippet?.channelTitle}
        </h4>

        <p className="text-gray-500 mt-2">
          {video?.snippet?.description}
        </p>
      </div>

    </div>
  );
};

export default RecomendVideos;
