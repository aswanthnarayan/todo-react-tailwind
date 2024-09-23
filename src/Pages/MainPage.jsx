import React from 'react'
import Navbar from '../components/Navbar'
import Container from '../components/Container'
import {MessageDialog} from '../components/EditModal'

export default function () {
  return (
    <div className='bg-[#CDE8E5] rounded-md h-full max-h-[calc(100vh-1rem)] lg:max-h-[calc(100vh-3rem)] '>
        <Navbar/>
        <Container/>
    </div>
  )
}
