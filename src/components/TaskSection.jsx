import React, { useState } from "react";
import TodoItem from "./TodoItem";
import FilterButton from "./FilterButton";
import {ImgWithBlurredCaption} from "./FirstMsg";
import "../App.css";
import blankImg from '../assets/Efficiency.png'
import pendingBlankImg from '../assets/done.png'
import completedBlankImg from '../assets/sucsess.png'


export default function TaskSection({ todos, updateTodoStatus ,onEdit,onDelete }) {

  const [filter, setFilter] = useState("all");
  const filteredTodo = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });
  
  const completedTodo = todos.filter((td)=>td.completed);
  const pendingTodo = todos.filter((td)=>!td.completed);

  const isNoTodos = todos.length === 0;
  const isAllCompleted = todos.length > 0 && pendingTodo.length === 0;
  const isNoneCompleted = todos.length > 0 && completedTodo.length === 0;

  const emptyMsg = {
    src: isNoTodos
      ? blankImg
      : isAllCompleted
      ? completedBlankImg
      : pendingBlankImg,
    msg1: isNoTodos
      ? 'Get started, Get organized.'
      : isAllCompleted
      ? 'You’ve completed everything'
      : 'No tasks completed yet',
    msg2: isNoTodos
      ? 'Add your first to-do!'
      : isAllCompleted
      ? 'Time to relax or add new goals.'
      : 'Let’s get some done!',
  };



  return (
    <div className="w-full lg:w-5/12 bg-[#EEF7FF] shadow-2xl p-2 h-80 md:h-64 lg:h-[calc(100%-64px)] rounded-md">
      <div className="flex-col gap-5">
        {todos.length>0?<div className="flex justify-around py-2">
          <FilterButton name="all" onClick={() => setFilter("all")} filter={filter} />
          <FilterButton
            name="completed"
            onClick={() => setFilter("completed")}
            filter={filter} 
          />
          <FilterButton name="pending" onClick={() => setFilter("pending")} filter={filter}  />
        </div>:""}
      </div>

      <div className="scroll-section overflow-y-auto h-64 md:h-48 lg:h-[calc(100%-60px)] mt-2 flex justify-center flex-wrap gap-12 ">
      {filteredTodo.length > 0 ? (
          filteredTodo.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              onCheckboxChange={updateTodoStatus}
              onEdit={onEdit}
              onDelete={onDelete} 
            />
          ))
        ) : (
          <ImgWithBlurredCaption isEmpty={emptyMsg} />
        )}
        
      </div>
    </div>
  );
}
