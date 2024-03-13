import React from 'react'
import DishCards from '../layout/DishCards'
import menu1 from '../assets/lobster.jpg'
import menu2 from '../assets/mutton.avif'
import menu3 from '../assets/ratatouille.jpg'
const Menu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center space-y-4'>
        <h1 className=' text-center text-4xl pb-3 lg:pb-4 font-semibold'>Premium Menu</h1>
        <div className='flex flex-wrap gap-5 items-center justify-center'>
            <DishCards img={menu1} title="Butter Lobster" price="₹ 1500"/>
            <DishCards img={menu2} title="Mutton Curry" price="₹ 1500"/>
            <DishCards img={menu3} title="Ratatouille" price="₹ 1500"/>
        </div>
    </div>
  )
}

export default Menu