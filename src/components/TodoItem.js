import React from 'react';

function TodoItem({ task, index, tasks, setTasks }) {
  const handleCompleteTask = (index) => {
    const newTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  return (
    <li className={task.completed ? 'completed' : ''}>
      <input type="checkbox" onClick={() => handleCompleteTask(index)} checked={task.completed} />
      <span>{task.text}</span>
      <button onClick={() => handleDeleteTask(index)}>Delete</button>
    </li>
  );
}

export default TodoItem;
