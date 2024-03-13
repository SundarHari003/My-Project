import React, { useState } from 'react'
import ReviewCard from '../layout/ReviewCard'

const Review = () => {
    const [para1,setPara1]=useState("Spice Route Indian Cuisine's biryani is a flavorful masterpiece, with aromatic spices infusing each grain of rice. Whether you choose chicken, lamb, or vegetable, the dish is cooked to perfection, bursting with layers of flavor. It's a must-try for lovers of authentic Indian cuisine.");
    const [para2,setPara2]=useState("Delizioso Italian Eatery's tandoori dishes offer a unique fusion of Indian and Italian flavors. From the perfectly marinated tandoori chicken to the crispy tandoori naan bread, each bite is a burst of tantalizing spices. It's a delightful choice for those craving something exotic yet familiar.");
    const [para3,setPara3]=useState("At Taste of France Bistro, the ratatouille is a rustic delight showcasing the flavors of Provence. Made with fresh vegetables cooked to perfection, each bite bursts with vibrant colors and robust flavors. Served with crusty French bread or fluffy rice, it's a comforting vegetarian option perfect for any occasion.");
  return (
    <div className= ' min-h-screen flex flex-col justify-center'>
        <h1 className=' text-4xl font-semibold text-center py-10'>Customer's Reviews</h1>
        <div className='flex flex-wrap gap-5 justify-center'>
            <ReviewCard paragraph={para1} name="Asha Patel"/>
            <ReviewCard paragraph={para2} name="Maya Sharma"/>
            <ReviewCard paragraph={para3} name="Lucas Rivera"/>
        </div>
    </div>
  )
}

export default Review