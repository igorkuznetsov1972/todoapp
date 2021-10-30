import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterList from './components/Filter';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App  col-12">
      <h1 className="text-center">Your TODO list</h1>
      <TaskForm />
      <FilterList />
      <TaskList />
    </div>
  );
}

export default App;
