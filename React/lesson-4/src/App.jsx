import React, { useState } from "react";
import AddTodo from "./Components/AddTodo/AddTodo";
import Children from "./Components/Chidren/Children";
import NavScrollExample from "./Components/Navbar/Navbar";
import TodoList from "./Components/TodoList/TodoList";
import UpdateTodo from "./Components/UpdateTodo/UpdateTodo";

const App = () => {
  const [taskArr, setTaskArr] = useState([]);
  const [show, setShow] = useState(false);
  const [oneEditTask, setOneEditedTask] = useState({});
  console.log(oneEditTask);
  function handleTask(objTask) {
    let newTodo = [...taskArr];
    newTodo.push(objTask);
    setTaskArr(newTodo);
    // console.log(taskArr);
  }
  function clickDelete(id) {
    let newTaskArr = taskArr.filter(item => {
      return item.id !== id;
    });
    // console.log(newTaskArr);
    setTaskArr(newTaskArr);
  }

  //modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <NavScrollExample />
      <div className="w-50 mx-auto mt-5">
        <AddTodo handleTask={handleTask} />
      </div>
      <TodoList
        taskArr={taskArr}
        clickDelete={clickDelete}
        handleShow={handleShow}
        setOneEditedTask={setOneEditedTask}
      />
      <UpdateTodo handleClose={handleClose} show={show} />
    </div>
  );
};

export default App;
//useEffect-тема
