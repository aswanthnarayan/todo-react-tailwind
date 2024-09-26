import React, { useEffect, useState } from "react";
import TaskSection from "../components/TaskSection";
import AddSection from "../components/AddSection";
import { v4 as uuidv4 } from "uuid";

export default function Container() {
  const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];

  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const updateTodoStatus = (id, completed) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  const addTodo = (todo) => {
    const newTodo = {
      id: uuidv4(),
      text: todo,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const editTodo = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  return (
    <div className="p-4 flex flex-col lg:flex-row gap-5 h-full ">
      <TaskSection
        todos={todos}
        updateTodoStatus={updateTodoStatus}
        onEdit={editTodo}
        onDelete={deleteTodo}
      />
      <AddSection addTodo={addTodo} />
    </div>
  );
}
