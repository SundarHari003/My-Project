import React from 'react'

const Buttons = (prop) => {
  return (
    <button className='px-6 py-1 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full'>
        {prop.title}
    </button>
  )
}

export default Buttons