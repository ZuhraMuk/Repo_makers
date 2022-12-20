import React from "react";
import AddTodo from "./Components/AddTodo/AddTodo";
import ReadTask from "./Components/ReadTask/ReadTask";
import TodoContextProvider from "./context/TodoContext";

const App = () => {
  return (
    // Чтобы передавать функции из context во все остальные не используя props мы оборачиваем все вызовы в <TodoContextProvider>...</TodoContextProvider>. Теперь мы можем передовать "функции" во все компоненты которые находяться внутри этого тега (<TodoContextProvider>...</TodoContextProvider>)
    <TodoContextProvider>
      <AddTodo />
      <ReadTask />
    </TodoContextProvider>
  );
};

export default App;
