import React from 'react'
import myPic from '../img/HeroImg.jpg';
import Header from './Header';
function Banner() {
  return (
    <div className='float relative  top-0 left-0 h-[60vh] mb-2'>
        <img src="myPic" alt="banner image" />
        <div className='absolute top-1/2 md:top-3/4 w-full  text-center'>
            <p className='text-sm sm:text-lg text-white font-extrabold font-mono'>I know where i'm heading</p>
            <button className='text-blue-800 bg-white px-10 py-4 rounded-full font-mono font-black text-xl shadow-md m-3 hover:shadow-2xl active:scale-[80%] transition duration-[350ms]'>Quick Look UP</button>
        </div>
    </div>
  )
}

export default Banner