import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterList from './components/Filter';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <h1>Your TODO list</h1>
      <TaskForm />
      <FilterList />
      <TaskList />
    </div>
  );
}

export default App;
