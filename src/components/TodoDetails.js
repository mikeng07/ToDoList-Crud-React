import React from 'react';
import { useParams } from 'react-router-dom';

function TodoDetails({ todos }) {
  const { id } = useParams();
  const todo = todos.find((todo) => todo.id === Number(id));

  if (!todo) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h2>Shopping List Details</h2>
      <h3>Item: {todo.title}</h3>
      <p>Status: {todo.completed ? 'Completed' : 'Incomplete'}</p>
    </div>
  );
}

export default TodoDetails;