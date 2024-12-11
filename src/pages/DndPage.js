import React, { useState, useEffect  } from 'react';
import TodoItemDnd from '../components/TodoItemDnd';
import SwitchButton from '../components/SwitchButton';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function DndPage() {
  const [task, setTask] = useState('');
  const [columns, setColumns] = useState({
    todo: {
      name: 'todo',
      items: [
      { id: '1', text: 'First task' },
      { id: '2', text: 'Second task' },
      ],
    },
    inProgress: {
      name: 'inProgress',
      items: [],
    },
    done: {
      name: 'done',
      items: [],
    },
    });


  const handleAddTask = () => {
    if (!task) return; 

    const newTaskItem = {
      id: Date.now(),
      text: task,
      };


    const newTodoItems = [...columns.todo.items, newTaskItem]

    setColumns({
      ...columns,
      todo: {
        ...columns.todo,
        items: newTodoItems
      }

    });

    setTask("");
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
      });

    } else {
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    }
  };

  // useEffect(() => {
  //   console.log(columns);
  // }, [columns]);
  
  return (
    <div className='App'>
    <h1>To-Do List</h1>
      <SwitchButton path="/"/>
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
         <div className="columns">
         <DragDropContext onDragEnd={onDragEnd}>
           <div className="column">
             <h2>To Do</h2>
             <Droppable droppableId="todo">
               {(provided) => (
                <ul {...provided.droppableProps} ref={provided.innerRef}>
                  {columns.todo.items.map((task, index) => (
                    <Draggable key={task.text} draggableId={task.text} index={index}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <TodoItemDnd task={task} index={index} columns={columns} setColumns={setColumns} columnName={"todo"}/>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>

          <div className="column">
            <h2>inProgress</h2>
            <Droppable droppableId="inProgress">
              {(provided) => (
                <ul {...provided.droppableProps} ref={provided.innerRef}>
                  {columns.inProgress.items.map((task, index) => (
                    <Draggable key={task.text} draggableId={task.text} index={index}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <TodoItemDnd task={task} index={index} columns={columns} setColumns={setColumns} columnName={"inProgress"}/>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>

          <div className="column">
            <h2>Done</h2>
            <Droppable droppableId="done">
              {(provided) => (
                <ul {...provided.droppableProps} ref={provided.innerRef}>
                  {columns.done.items.map((task, index) => (
                    <Draggable key={task.text} draggableId={task.text} index={index}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <TodoItemDnd task={task} index={index} columns={columns} setColumns={setColumns} columnName={"done"}/>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    </div>
    );
}

export default DndPage;
