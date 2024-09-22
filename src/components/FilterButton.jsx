import { Button } from '@material-tailwind/react';
import React from 'react'

export default function FilterButton({name,onClick}) {
  const color = name === 'all' ? 'bg-gray-900'  : (name === 'completed' ? 'bg-green-700 ' : 'bg-yellow-700');
  return (
    <>
    <Button onClick={onClick} className={`border border-gray-400 rounded-lg px-3 py-1.5 ${name?color:''}`}>
       {name}
      </Button>

    {/* <button onClick={onClick} className={`border border-gray-400 rounded-lg px-3 py-1 ${name?color:''}`}>{name}</button> */}
    </>
  )
}
