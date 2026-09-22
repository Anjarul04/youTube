import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='flex flex-col w-10/12 '>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer