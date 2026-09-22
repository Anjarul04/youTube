import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessage, generateRandomName } from '../utils/helper';


const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store)=>store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(()=>{
    const i = setInterval(()=>{

      dispatch(addMessage({
        name:generateRandomName(),
        message:generateRandomMessage(20)
      }))

    },2000);

    return ()=>clearInterval(i);

  },[]);

  return (
    <>
    <div className=' bg-gray-100 h-[550px] ml-4  p-2 rounded-md  overflow-y-scroll flex flex-col-reverse'>
        {
          messages.map((message, index)=>(<ChatMessage key={index} name={message.name} message={message.message}/>))
        }
        
    </div>

    <form 
    onSubmit={
      (e)=>{e.preventDefault();
       dispatch(addMessage({name:"Anjarul", message:liveMessage})) 
       setLiveMessage("")
       } }>
        <div className='flex justify-between mx-3 my-3'>
          <input value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)}className='px-2 py-1 border border-black w-70'/>
          <button className='px-3 py-1 bg-gray-300 rounded-md cursor-pointer '>
            send
          </button>
        </div>
    </form>
    </>
  )
}

export default LiveChat