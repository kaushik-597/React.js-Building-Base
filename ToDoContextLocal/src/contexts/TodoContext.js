import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todoList: [
    {
      id: "",
      todo: "",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  delTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodoContext = () => {
  return useContext(TodoContext);
};
