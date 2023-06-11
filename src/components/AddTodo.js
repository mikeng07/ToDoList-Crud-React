import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function AddTodo({ addTodo }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        title,
        completed: false,
      };
      addTodo(newTodo);
      setTitle('');
    }
  };

  return (
    <div>
      <br></br>
      <h2>Add Item </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Control
            type="text"
            placeholder="Enter item"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <br></br>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
}

export default AddTodo;