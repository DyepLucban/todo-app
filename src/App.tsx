import React from 'react';
import Todo from './components/Todo'
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className='app-wrapper'>
        <div className='header'>
          <h1>TO DO LIST</h1>
        </div>
        <div>
          <Todo />
        </div>
      </div>
    </div>
  );
}

export default App;
