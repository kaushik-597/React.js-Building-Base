import { useEffect, useState } from "react";
import { TodoContextProvider, ToDoForm, ToDoItem } from "./components/index";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo))
    );
  };

  const delTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addTodo, updateTodo, delTodo, toggleComplete }}
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-4">
        <div className="w-full max-w-3xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="text-6xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
              Digital Diary ;)
            </h1>
            <p className="text-lg text-slate-300 font-medium">
              Stay organized and get things done
            </p>
          </div>

          <div className="mb-8 bg-slate-800/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-700/50 p-8 hover:border-slate-600/50 transition-all duration-300">
            <ToDoForm />
          </div>

          <div className="space-y-4">
            {todos.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-slate-400 text-xl font-medium">
                  No tasks yet. Add one to get started!
                </p>
              </div>
            ) : (
              todos.map((todo) => (
                <div
                  key={todo.id}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-700/50 hover:border-cyan-500/30 hover:shadow-cyan-500/20 hover:shadow-xl transition-all duration-300 p-5"
                >
                  <ToDoItem todo={todo} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
