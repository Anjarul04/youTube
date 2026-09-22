import React from 'react'

const Button = ({ prop }) => {
  return (
    <div>
        <button className="bg-gray-100 border-2rounded-md py-1 px-2 hover:bg-gray-200 cursor-pointer">{prop}</button>
    </div>
  )
}

export default Button