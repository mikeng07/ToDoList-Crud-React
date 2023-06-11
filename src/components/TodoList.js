import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, Button } from 'react-bootstrap';

function TodoList({ todos, updateTodoStatus, deleteTodo }) {
  return (
    <div>
      <h2>Shopping List</h2>
      <ListGroup>
        {todos.map((todo) => (
          <ListGroup.Item key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => updateTodoStatus(todo.id, e.target.checked)}
            />
            <Link to={`/todo/${todo.id}`}>
              {todo.title}
            </Link>
            <Button variant="danger" size="sm" onClick={() => deleteTodo(todo.id)}>Delete</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default TodoList;