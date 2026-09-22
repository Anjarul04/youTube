import React from 'react'
import user from '../assets/user.png';

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-2xl my-2'>
        <img className='w-6 h-6 mx-2' src={user}/>
        <h2 className='font-medium px-2'>{name}</h2>
        <p>{message}</p>
    </div>
  )
}

export default ChatMessage