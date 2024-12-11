import React, { useState } from 'react';
import TodoItem from '../components/TodoItem';
import SwitchButton from '../components/SwitchButton';


function TodoPage() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [filter, setFilter] = useState('all'); // all, completed, incomplete

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'incomplete') {
      return !task.completed;
    }
    return true;
  });

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <SwitchButton path="dnd/"/>
      <div className="task-input">
        <form onSubmit={(e) => {e.preventDefault(); handleAddTask();}}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
          />
          <button onClick={handleAddTask}>Add</button>
        </form>
      </div>

      <div className="filters">
        <button onClick={() => handleFilterChange('all')}>All</button>
        <button onClick={() => handleFilterChange('completed')}>Completed</button>
        <button onClick={() => handleFilterChange('incomplete')}>Incomplete</button>
      </div>

      <ul>
        {filteredTasks.map((task, index) => (
          <TodoItem
            task={task}
            index={index}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoPage;
