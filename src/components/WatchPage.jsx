import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import user from "../assets/user.png";
import { api_key } from "../utils/constent";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");

  const [comments, setComments] = useState([]);

  const dispatch = useDispatch();

  // Close sidebar
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  // Fetch YouTube comments
  useEffect(() => {
    if (videoId) {
      getComment();
    }
  }, [videoId]);

  const getComment = async () => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&maxResults=20&key=${api_key}`,
      );

      const json = await response.json();

      if (!response.ok) {
        console.error("YouTube API Error:", json);
        return;
      }

      const formattedComments = json.items.map((item) => {
        const topComment = item.snippet.topLevelComment.snippet;

        return {
          name: topComment.authorDisplayName,
          text: topComment.textDisplay,

          replies:
            item.replies?.comments?.map((reply) => ({
              name: reply.snippet.authorDisplayName,
              text: reply.snippet.textDisplay,
              replies: [],
            })) || [],
        };
      });

      setComments(formattedComments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const RenderComments = ({ comment }) => {
    return (
      <div className="my-2 mx-2 border border-gray-300 rounded-2xl p-2">
        <div className="flex items-center">
          <img className="h-7 w-7 mx-4" src={user} alt="user" />

          <strong>{comment.name}</strong>
        </div>

        <p className="mx-9 my-2">{comment.text}</p>
      </div>
    );
  };

  const CommentList = ({ comments = [] }) => {
    return comments.map((comment, index) => (
      <div key={index}>
        <RenderComments comment={comment} />

        {comment.replies?.length > 0 && (
          <div className="ml-12 border-l-2 border-black">
            <CommentList comments={comment.replies} />
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="w-full min-h-screen p-0 m-3">
      <div className="flex">
        {/* YouTube Video */}
        <div>
          <iframe
          width="1100"
          height="550"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        </div>

        
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Comments</h2>

        <CommentList comments={comments} />
      </div>
    </div>
  );
};

export default WatchPage;
