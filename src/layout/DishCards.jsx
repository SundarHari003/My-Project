import React from 'react'
import  {BsStarFill, BsStarHalf} from 'react-icons/bs'
import Buttons from './Buttons'
const DishCards = (props) => {
  return (
    <div className=' w-4/6 md:w-3/6 lg:w-1/4 p-5 shadow-[rgba(0,0,0,0.2)_0px_3px_8px] rounded-lg'>
        <img className=' rounded-xl h-48 w-full' src={props.img} alt="food"/>
        <div className=' space-y-4'>
            <h1 className=' font-semibold text-center textxl pt-6'>{props.title}</h1>
            <div className=' flex flex-row justify-center'>
                <BsStarFill className=' text-orange-500'/>
                <BsStarFill className=' text-orange-500'/>
                <BsStarFill className=' text-orange-500'/>
                <BsStarFill className=' text-orange-500'/>
                <BsStarHalf className=' text-orange-500'/>
            </div>
            <div className=' flex flex-row items-center justify-center gap-4'>
                <h3 className=' font-semibold text-lg'>{props.price}</h3>
                <Buttons title="Buy Now"/>
            </div>
        </div>
    </div>
  )
}

export default DishCards