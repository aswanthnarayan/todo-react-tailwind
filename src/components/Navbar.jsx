import React from 'react'
import avatar from '../assets/avatar.jpg'
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    
    <><div className='flex justify-between p-2 px-6 items-center '>
        <img className='w-16' src={logo} alt="" />
        <img src={avatar} alt="avatar" className='w-12 rounded-full'/>
    </div>
    <hr /></>
  )
}
