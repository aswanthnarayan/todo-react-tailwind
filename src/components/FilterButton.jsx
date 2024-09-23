import { Button } from '@material-tailwind/react';
import React from 'react'

export default function FilterButton({name,onClick,filter}) {
  // console.log(name);
  // console.log(filter);

  // let isActive = filter===name?true:false
  // console.log(isActive);
  

  const color = name === 'all' ? 'bg-gray-900'  : (name === 'completed' ? 'bg-green-700 ' : 'bg-yellow-700');
  return (
    <>
    <Button onClick={onClick} className={`border border-gray-400 rounded-lg px-3 py-1.5 ${name?color:''} `}>
       {name}
      </Button>
    </>
  )
}
