"use client";

import { useState } from "react";
import { useTodoContext } from "../contexts/TodoContext";

function ToDoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, delTodo, toggleComplete } = useTodoContext();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };
  return (
    <div
      className={`flex items-center gap-4 transition-all duration-300 ${
        todo.completed ? "opacity-50" : ""
      }`}
    >
      <input
        type="checkbox"
        className="w-6 h-6 rounded-lg border-2 border-slate-600 cursor-pointer accent-cyan-500 hover:border-cyan-400 transition-all duration-300 flex-shrink-0"
        checked={todo.completed}
        onChange={toggleCompleted}
      />

      <input
        type="text"
        className={`flex-1 bg-transparent outline-none text-lg font-semibold transition-all duration-300 ${
          isTodoEditable
            ? "border-b-2 border-cyan-500 px-2 py-1 text-white bg-slate-700/30 rounded"
            : `border-none ${
                todo.completed
                  ? "line-through text-slate-500"
                  : "text-slate-100"
              }`
        }`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      <button
        className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-all duration-300 flex-shrink-0 ${
          todo.completed
            ? "opacity-30 cursor-not-allowed bg-slate-700/30 text-slate-500"
            : "bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95"
        }`}
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "✓" : "✎"}
      </button>

      <button
        className="w-10 h-10 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center font-bold hover:bg-red-500/40 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 active:scale-95 flex-shrink-0"
        onClick={() => delTodo(todo.id)}
      >
        ✕
      </button>
    </div>
  );
}

export default ToDoItem;
