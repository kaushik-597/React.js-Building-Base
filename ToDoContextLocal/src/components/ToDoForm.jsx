"use client";

import { useState } from "react";
import { useTodoContext } from "../contexts/TodoContext";

function ToDoForm() {
  const { addTodo } = useTodoContext();
  const [todo, setTodo] = useState();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };
  return (
    <form onSubmit={add} className="flex gap-4">
      <input
        type="text"
        placeholder="Add a new task..."
        className="flex-1 px-6 py-4 rounded-2xl bg-slate-700/50 border border-slate-600/50 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent focus:shadow-lg focus:shadow-cyan-500/20 transition-all duration-300 font-medium backdrop-blur-sm hover:border-slate-500/50"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-cyan-500/30 active:scale-95 transform transition-all duration-300"
      >
        Add
      </button>
    </form>
  );
}

export default ToDoForm;
