import React, { useState, useEffect } from 'react';
import Form from './Forms/Form';
import TodoList from './Forms/TodoList';
import axiosInstance from '../../api';

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const baseUrl = 'http://localhost:4000/api/task';

  useEffect(() => {
    axiosInstance.get(baseUrl)
    .then((res) => {
      setTodos(res.data)
    }) 
  }, []);

  return (
    <div>
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
      />      
    </div>
  );
 }

 export default Todo;
