import React, { useState } from "react";
import todoo from "../assets/todoo.png";
import { Toaster, toast } from "react-hot-toast";

export default function AddSection({ addTodo }) {
  const [newTask, setNewTask] = useState("");

  const array = JSON.parse(localStorage.getItem("todos")) || [];

  console.log(array);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") {
      toast.error("Task cannot be blank!");
      return;
    }
    const taskExists = array.some(
      (task) => task.text.toLowerCase() === newTask.trim().toLowerCase()
    );
    if (taskExists) {
      toast.error("Task already exists!");
      return;
    }

    addTodo(newTask);
    toast.success("New Task Added!");
    setNewTask("");
  };
  return (
    <div className="w-full lg:w-7/12 mt-0 flex flex-col md:flex-row lg:flex-col gap-0  md:justify-around lg:justify-start xl:justify-center">
      <div className="h-64  hidden md:flex justify-center">
        <img
          className="object-cover h-full md:h-44 lg:h-full"
          src={todoo}
          alt=""
        />
      </div>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <h2 className="text-l md:text-lg lg:text-2xl font-bold uppercase">
          Add Your Task
        </h2>
        <input
          type="text"
          className="border border-gray-400 focus:border-none p-3 lg:p-4 w-90 rounded-md text-gray-800"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter your task"
        />
        <Toaster position="top-right" />
        <button
          type="submit"
          className=" bg-[#7AB2B2] w-full lg:w-40 py-2 lg:py-4 rounded-md uppercase text-white font-bold"
        >
          Add
        </button>
      </form>
    </div>
  );
}
