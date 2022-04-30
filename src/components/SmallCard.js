import React from 'react'
import HeroImg from '../img/HeroImg.jpg'

function SmallCard({img,location,distance}) {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-[107%] transition duration-[
        300ms
    ] ease-out'>
        <div className='relative h-16 w-16'>
            <img src={HeroImg}  className='rounded-lg' />
        </div>
        <div>
            <h2>{`kash blassa`}</h2>
            <h3 className='text-gray-500'>{`une distance qlq`}</h3>
        </div>
    </div>
  )
}

export default SmallCard;