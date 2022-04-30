import React from 'react'
import BigCard from '../img/BigCard.jpg';

function LargeCard() {
  return (
    <div className='relative h-80 min-w-[300px] text-black py-14 cursor-pointer mb-10'>
        <div className='relative h-80 w-11/12' >
        <img src={BigCard} alt="" className='rounded-2xl max-h-[80%] w-[100%]'/>
        </div>
        <div className='absolute top-32 text-white left-10 bg-[rgba(230,230,230,0.15)] rounded-2xl w-3/4 '>
            <h2 className='text-4xl font-bold mb-3 w-100 pl-5
            '>Wanna start business</h2>
            <p className='font-semibold text-md pl-5'>Join us now!  u can sign in/up  , Post your offer and earn money</p>
            <button className='text-md font-semibold px-4 py-2 bg-red-300 m-2 w-40 rounded-3xl h-10 text-center hover:scale-105  transition  duration-[500ms]'>Sign Up</button>
        </div>
    </div>
  )
}

export default LargeCard