import React from 'react'
import DishCards from '../layout/DishCards'
import img1 from '../assets/food-img-1.jpg'
import img2 from '../assets/food-img-2.jpg'
import img3 from '../assets/food-img-3.jpg'
import img4 from '../assets/food-img-4.jpg'
import img5 from '../assets/food-img-5.jpg'
import img6 from '../assets/food-img-6.jpg'
const Dishes = () => {
  return (
    <div className=' min-h-screen flex flex-col justify-center px-5'>
        <h1 className=' text-4xl text-center py-8 font-semibold'>Our Dishes</h1>
        <h2 className=' text-4xl text-center py-4 font-semibold'>Vegitarians</h2>
        <div className='flex flex-wrap gap-5 justify-center'>
            <DishCards img={img1} title="Idly" price="₹ 100"/>
            <DishCards img={img2} title="Sambar" price="₹ 200"/>
            <DishCards img={img3} title="Veg Rice" price="₹ 150"/>
        </div>
        <h2 className=' text-4xl text-center py-8 font-semibold'> Non Vegitarians</h2>
        <div className=' flex flex-wrap gap-5 justify-center'>
            <DishCards img={img4} title="Biriyani" price="₹ 500"/>
            <DishCards img={img5} title="Naan" price="₹ 250"/>
            <DishCards img={img6} title="Tandoori" price="₹ 800"/>
        </div>
    </div>
  )
}

export default Dishes