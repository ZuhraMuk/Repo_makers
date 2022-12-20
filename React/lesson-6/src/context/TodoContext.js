import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
const API = " http://localhost:8000/tasks";

export const taskContext = createContext(); //Вызываем метод чтобы использовать context и експортируем

const TodoContextProvider = ({ children }) => {
  //Здесь мы принимаем все дочерние компоненты из TodoContextProvider
  //Create Task . Функция добавления таска. Принимает объект из AddTodo
  //! Здесь мы используем async так как при вызове функции readTask срабатывает сразу и не успевает отобразить так как данные еще не успели добавиться
  async function addTask(obj) {
    try {
      // Здесь мы используем axios(fetch) с методом .post для добавления нового объекта в базу данных. Первым принимаем API адресс , а вторым объект который хотим добавить
      await axios.post(API, obj);
      //Сразу после успешного добавления вызываем функцию отображения
      readTask();
    } catch (e) {
      return e;
    }
  }

  //Read Task
  const [taskArr, setTaskArr] = useState([]);
  // console.log(taskArr);

  async function readTask() {
    const { data } = await axios(API);
    // console.log(data);
    setTaskArr(data);
  }

  //delete task
  // Здесь мы используем axios(fetch) с методом .delete для удаления данного объекта из базы данных. Первым принимаем API адресс , а вторым id объекта который хотим удалить
  async function deleteTask(id) {
    await axios.delete(`${API}/${id}`);
    // И сразу же вызываем функцию readTask для отображения изминений
    readTask();
  }

  //Сохраняем все в один объект для передачи
  const cloud = {
    addTask,
    readTask,
    taskArr,
    deleteTask,
  };
  return <taskContext.Provider value={cloud}>{children}</taskContext.Provider>;
};

export default TodoContextProvider;
