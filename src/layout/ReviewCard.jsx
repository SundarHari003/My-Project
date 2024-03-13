import React from 'react'

const ReviewCard = (props) => {
  return (
    <div className=' w-5/6 md:w-3/6 lg:w-1/4 p-5 shadow-[rgba(0,0,0,0.2)_0px_3px_8px] rounded-lg flex flex-col'>
        <p className=' h-4/5 text-gray-400'>{props.paragraph}</p>
        <h3 className=' h-1/5 flex justify-end items-end font-semibold'>- {props.name}</h3>
    </div>
  )
}

export default ReviewCard