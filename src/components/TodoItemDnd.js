import React from 'react';

function TodoItemDnd({ task, index, columns, setColumns, columnName }) {
  const handleDeleteTask = () => {

    // console.log(index, columnName);
    const newItems = columns[columnName].items.filter((_, i) => i !== index);
    // console.log(newItems);

    setColumns({
      ...columns,
      [columnName]: {
        ...columns[columnName],
        items: newItems
      }
    });

  }
  return (
    <li className={task.completed ? 'completed' : ''}>
      <span>{task.text}</span>
      <button onClick={() => handleDeleteTask(index)}>Delete</button>
    </li>
  );
}

export default TodoItemDnd;
