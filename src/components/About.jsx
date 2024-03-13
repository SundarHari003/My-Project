import React from 'react'
import chef from '../assets/chef.jpg'
const About = () => {
  return (
    <div className=' min-h-screen flex flex-col sm:flex-row md:flex-row lg:flex-row justify-center items-center lg:px-40 px-5'>
        <img className=' h-80' src={chef} alt="chef" />
        <div className=' space-y-4 lg:pt-14'>
            <h1 className=' font-semibold text-4xl text-start'>
                Why Choose Us?
            </h1>
            <p>
                <ul className=' list-disc pl-8'>
                    <li>
                        From local favorites to popular chains, we partner with a diverse range of restaurants to offer you plenty of options. With our user-friendly app and website, ordering food is a breeze. Plus, track your delivery in real-time to know exactly when your meal will arrive.
                    </li>
                    <li>
                        We prioritize quality and reliability, ensuring that every meal is prepared with care and delivered promptly.Take advantage of exclusive deals, discounts, and promotions to save on your favorite eats.
                    </li>
                </ul>
            </p>
        </div>
    </div>
  )
}

export default About