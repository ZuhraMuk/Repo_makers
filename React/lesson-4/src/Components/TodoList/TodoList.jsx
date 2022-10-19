import React, { useEffect } from "react";
import { Button, Container, ListGroup } from "react-bootstrap";

const TodoList = ({ taskArr, clickDelete, handleShow, setOneEditedTask }) => {
  function handleEdit(objTask) {
    handleShow();
    setOneEditedTask(objTask);
  }
  return (
    <>
      <Container className="w-75">
        <ListGroup as="ol">
          {taskArr.map((item, index) => (
            <ListGroup.Item
              key={item.id}
              as="li"
              className="d-flex justify-content-between align-items-center">
              {item.task}
              <span>
                <Button onClick={() => clickDelete(item.id)}>Delete</Button>
                <Button variant="danger" onClick={() => handleEdit(item)}>
                  Edit
                </Button>
              </span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </>
  );
};

export default TodoList;
