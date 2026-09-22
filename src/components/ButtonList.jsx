import React from 'react'
import Button from './Button'
const ButtonList = () => {
    const buttonList= ["All", "Music", "Mixes", "Live", "Gaming", "News", "Sports", "Learning", "Fashion & Beauty", "Comedy", "Movies & Shows", "Travel & Events"]
  return (
    <div className='flex space-x-4 overflow-x-auto py-2 px-4'>
      {buttonList.map((buttonText, index) => (
        <Button key={index} prop={buttonText} />
      ))}
    </div>
  )
}

export default ButtonList