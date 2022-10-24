import React, { useContext, useEffect } from "react";
import { taskContext } from "../../context/TodoContext";

const ReadTask = () => {
  const { readTask, taskArr } = useContext(taskContext);
  useEffect(() => {
    readTask();
  }, []);
  // console.log();
  return (
    <ul>
      {taskArr.map((item, index) => (
        <li key={index}>{item.task}</li>
      ))}
    </ul>
  );
};

export default ReadTask;
