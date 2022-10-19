import React, { useState } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";

const UpdateTodo = ({ handleClose, show }) => {
  const [editedTask, setEditedTask] = useState();
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateTodo;
