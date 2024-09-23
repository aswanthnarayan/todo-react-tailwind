import React, { useState } from 'react'
import todoo from '../assets/todoo.png'

export default function AddSection({addTodo}) {
  const [newTask, setNewTask] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return; 
    addTodo(newTask); 
    setNewTask('');
  };
  return (
    <div className="w-7/12 mt-4 flex flex-col gap-12">
      <div className='h-64 flex justify-center items-center' >
        <img className='object-cover h-full ' src={todoo} alt="" />
      </div>
      <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
      <h2 className='text-2xl font-bold uppercase'>Add Your Task</h2>
        <input
          type="text"
          className='border border-gray-400 focus:border-none p-4 w-90 rounded-md text-gray-800'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter your task"
        />
        <button type="submit" className=" bg-[#7AB2B2] w-40 py-4 rounded-md uppercase text-white font-bold">Add
        </button>
      </form>
    </div>
  )
}
