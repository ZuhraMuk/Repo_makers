import React, { Children, useContext, useState } from "react";
import { taskContext } from "../../context/TodoContext"; // а здесь мы импортируем createContext() которой будем пользоваться

const AddTodo = () => {
  const { addTask } = useContext(taskContext); // Здесь мы используем useContext(taskContext) , а в скобках передаем название переменной createContext()та которой будем пользоваться

  const [inpTask, setInpTask] = useState("");

  // Функция для создания нового объекта
  function handleAdd() {
    // Проверка на заполненность полей
    if (!inpTask.trim()) {
      alert("Заполните поле");
      return;
    }
    // Новый объект из ключей task со значением взятого из инпута и time с уникальным значением который не повторяется
    let newTask = {
      task: inpTask,
      time: new Date(),
    };
    // Передача нового объекта в addTask(newTask) из useContext(taskContext)
    addTask(newTask);
    // После отправки очищаем инпут
    setInpTask("");
  }

  return (
    <div>
      <input
        type="text"
        value={inpTask}
        // передаем данные из инпута в useState
        onChange={e => setInpTask(e.target.value)}
      />
      {/* при клике вызывается функция handleAdd  */}
      <button onClick={handleAdd}>Добавить</button>
    </div>
  );
};

export default AddTodo;
