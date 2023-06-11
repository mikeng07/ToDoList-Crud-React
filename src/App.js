import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import TodoDetails from './components/TodoDetails';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // Function to update a todo's status
  const updateTodoStatus = (todoId, newStatus) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, completed: newStatus };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // Function to delete a todo
  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  return (
    <Router>
      <Container>
        <Header />
        <Routes>          
          <Route path="/" element={<TodoList todos={todos} updateTodoStatus={updateTodoStatus} deleteTodo={deleteTodo} />} />
          <Route path="/add" element={<AddTodo addTodo={addTodo} />} />
          <Route path="/todo/:id" element={<TodoDetails todos={todos} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
