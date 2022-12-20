import React, { useContext, useEffect } from "react";
import { taskContext } from "../../context/TodoContext";

const ReadTask = () => {
  const { readTask, taskArr, deleteTask } = useContext(taskContext); // здесь используем context и вытаскиваем все функции которые нужны
  // useEffect нужен чтобы readTask сработал только один раз
  useEffect(() => {
    readTask();
  }, []);
  // console.log();
  return (
    <ul>
      {/* Перебираем массив с обектами и создаем li ки для каждого */}
      {taskArr.map((item, index) => (
        <>
          <li key={index}>{item.task}</li>
          {/* Создаем кнопку удуления для каждого li и вызываем функцию deleteTask в параметры передаем id данного объекта */}
          <button onClick={() => deleteTask(item.id)}>delete</button>
        </>
      ))}
    </ul>
  );
};

export default ReadTask;
