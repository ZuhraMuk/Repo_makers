import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const AddTodo = ({ handleTask }) => {
  const [inpTask, setInpTask] = useState("");
  function handleAdd() {
    let newTask = {
      task: inpTask,
      id: Date.now(),
    };
    handleTask(newTask);
  }
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Task</InputGroup.Text>
        <Form.Control
          value={inpTask}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          onChange={e => setInpTask(e.target.value)}
        />
        <Button variant="success" onClick={handleAdd}>
          Add
        </Button>
      </InputGroup>
    </>
  );
};

export default AddTodo;
