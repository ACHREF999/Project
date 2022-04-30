import React from 'react'
import HeroImage from '../img/HeroImg.jpg'
function MediumCard({img,title}) {
  return (
    <div className={`cursor-pointer shadow-md hover:shadow-2xl rounded-xl hover:scale-105 transition duration-200 ease-out rounded-3xl  snap-center`}>
            <div className='relative mt-0 pt-0  w-80 bg-[#fae5df]'>
                <img src={HeroImage} className='relative my-4 rounded-b-2xl  w-[100%] h-[100%]' />
                <h2 className='text-2xl bg-blue mx-3 max-h-10'>{'title i can not fetch'}</h2>
                <p className='mx-3'>{` SellerName : 200$`}</p>

            </div>
    </div>
  )
}

export default MediumCard