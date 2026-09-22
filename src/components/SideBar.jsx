import React from 'react'
import home from '../assets/home.png'
import video from '../assets/video.png'
import channel from '../assets/channel.png'
import history from '../assets/history.png'
import playlist from '../assets/playlist.png'
import clock from '../assets/clock.png'
import like from '../assets/like.png'
import youtube from '../assets/youtube.png'
import download from '../assets/download.png'
import learning from '../assets/learning.png'
import { Link } from 'react-router-dom'
const SideBar = () => {
  return (
    <div className='w-2/12 h-screen bg-gray-100 p-4'>
            <ul className='space-y-4 '>
                <Link to="/">
                    <div className='flex items-center space-x-4 cursor-pointer py-3'>
                        <img className="w-6 h-6" src={home} alt="Home" />
                        <li className='text-xl'>Home</li>
                    </div>
                </Link>
                <div className='flex items-center space-x-4 cursor-pointer'>
                    <img className="w-6 h-6" src={video} alt="Shorts" />
                    <li className='text-xl'>Shorts</li>
                </div>
            </ul>
           <hr className="border-t border-gray-400 my-4" />
           <ul className='space-y-4'>
            <div className='flex items-center space-x-4 cursor-pointer'>
                <img className="w-6 h-6" src={channel} alt="Channel" />
                <li className='text-xl'>Your Channel</li>
            </div>
            <div className='flex items-center space-x-4 cursor-pointer'>
                <img className="w-6 h-6" src={history} alt="History" />
                <li className='text-xl'>History</li>
            </div>
            <div className='flex items-center space-x-4 cursor-pointer'>
                <img className="w-6 h-6" src={playlist} alt="Watch Later" />
                <li className='text-xl'>Playlists</li>
            </div>
            <div className='flex items-center space-x-4 cursor-pointer'>
                <img className="w-6 h-6" src={clock} alt="Watch Later" />
                <li className='text-xl'>Watch Later</li>
            </div>
            <div className='flex items-center space-x-4 cursor-pointer'>
                <img className="w-6 h-6" src={like} alt="Liked Videos" />
                <li className='text-xl'>Liked Videos</li>
            </div>
            <div className='flex items-center space-x-4 cursor-pointer'>
                <img className="w-6 h-6" src={youtube} alt="YouTube Premium" />
                <li className='text-xl'>Your Videos</li>
            </div>
            <div className='flex items-center space-x-4 cursor-pointer'>
                <img className="w-6 h-6" src={download} alt="Downloads" />
                <li className='text-xl'>Downloads</li>
            </div>
            <div className='flex items-center space-x-4 cursor-pointer'>
                <img className="w-6 h-6" src={learning} alt ="Learning" />
                <li className='text-xl'>courses</li>
            </div>
           </ul>
    </div>
  );
}

export default SideBar