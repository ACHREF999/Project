import React from 'react'
import {SearchIcon,
  UsersIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon} from '@heroicons/react/solid'
function Header() {
  return (
    <div className={`sticky z-50 top-0 h-[71px] bg-white grid grid-cols-3 justify-between shadow-md p-4 md:px-8 transition-all w-[100vw]`}>
      <div className='relative flex my-auto items-center h-10 text-red-400 text-3xl font-semibold border-l-2 border-red-500'>
          <p className=' px-16'>ImoSpace</p>
      </div>
      <div className='flex flex-row justify-between items-center '>
        <input type="text" placeholder={'search'} className='pl-4 bg-transparent  flex-grow'/>
        <SearchIcon className='text-sm inline-flex p-1 bg-red-400 mx-auto text-white rounded-full h-8 m-auto'/>
      </div>
      <div className='flex pl-8 justify-end items-center space-x-4 text-gray-700'>
        <p>Become a seller</p>
        <GlobeAltIcon className='h-6 cursor-pointer' />
        <div className='flex space-x-2 border-2 p-2 items-center cursor-pointer rounded-full '>
          <MenuIcon className='h-6'/>
          <UserCircleIcon className='h-6'/>
        </div>
      </div>
    
    </div>
  )
}

export default Header