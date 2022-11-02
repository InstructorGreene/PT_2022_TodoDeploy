import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import toastr from "toastr";
import "toastr/build/toastr.min.css";

function Add(props) {
  const [formValues, changeFormValues] = useState({
    id: 0,
    task: "",
    complete: false,
  });

  toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: "toast-top-right",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };

  const handleChange = (event) => {
    const newState = { ...formValues };
    if (event.target.id === "complete") {
      newState["complete"] = !formValues.complete;
    } else {
      newState[event.target.name] = event.target.value;
    }
    changeFormValues(newState);
  };

  const handleSubmit = () => {
    toastr["success"]("Todo added", "Success");

    props.updateTodos(formValues);
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="taskID">
          <Form.Label> Task ID</Form.Label>
          <Form.Control
            name="id"
            type="number"
            value={formValues.id}
            onInput={(event) => handleChange(event)}
          />
        </Form.Group>

        <Form.Group controlId="taskDescription">
          <Form.Label> Description</Form.Label>
          <Form.Control
            name="task"
            type="text"
            value={formValues.task}
            onInput={(event) => handleChange(event)}
          />
        </Form.Group>

        <Form.Group controlId="complete">
          <Form.Check
            type="checkbox"
            id="complete"
            label="Completed?"
            value={formValues.complete}
            onInput={(event) => handleChange(event)}
          />
        </Form.Group>
      </Form>
      <Button variant="primary" type="submit" onClick={() => handleSubmit()}>
        Submit
      </Button>
    </div>
  );
}
export default Add;
