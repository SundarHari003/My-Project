import React from 'react'
import Buttons from '../layout/Buttons'

const Home = () => {
  return (
    <div className='min-h-screen flex flex-row justify-between items-center lg:px-32 md:px-16 px-5 bg-[url(./assets/image-11.jpg)] bg-cover bg-no-repeat'>
        <div className='w-full lg:w-2/3 space-y-5 pt-10'>
            <h1 className='text-gray-400 font-semibold md:text-6xl sm:text-5xl lg:text-6xl text-4xl'>Elevete Your Inner Foodie with  Every Bite</h1>
            <p className='text-gray-300 pl-7'>
                <ul className='list-disc'>
                    <li>
                        Savor delectable flavors that dance on your palate.
                    </li>
                    <li>
                         Indulge in culinary artistry that transcends the ordinary.
                    </li>
                    <li>
                        At our foodie haven, every bite tells a story of passion and innovation.
                    </li>
                </ul>
            </p>
            <div>
                <Buttons title='Order Now'/>
            </div>
        </div>
    </div>
  )
}

export default Home