import React, { useState } from 'react';

interface ITasks {
  id: number;
  task: string;
  isCompleted?: boolean;
  idEditable?: boolean;
  editText?: string;
}

const ToDoList = () => {
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const [inputText, setInputText] = useState('');
  const [filteredTasks, setFilteredTasks] = useState<string>('');

  //handle submit task
  const handleAddTask = (e: { preventDefault: () => void }) => {
    //handle
    e.preventDefault();
    if (!inputText.trim()) return;

    const newTask: ITasks = {
      id: Date.now(),
      task: inputText,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);

    setInputText('');
    console.log(tasks);
  };

  // implement a search input that filters tasks by their titles
  const fiteredTask = tasks.filter((task) =>
    task.task.toLowerCase().includes(filteredTasks.toLowerCase())
  );

  //handle delete
  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // add the ability to mark tasks as completed
  const handleComplete = (id: number) => {
    const updateTask = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updateTask);
    console.log('isCompleted');
  };

  // add the ability to edit task details directly from the list
  const handleEdit = (id: number) => {
    const updateTask = tasks.map((task) =>
      task.id === id ? { ...task, idEditable: !task.idEditable } : task
    );
    return setTasks(updateTask);
  };

  const handleSave = (id: number) => {
    const updateTask = tasks.map((task) =>
      task.id === id ? { ...task, idEditable: false, editText: 'task' } : task
    );
    return setTasks(updateTask);
  };

  return (
    <div>
      <h1>My task App</h1>
      <section>
        <input
          type="text"
          placeholder="add task here"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </section>

      {/* implement a search input that filters tasks by their titles */}
      <section>
        <h2>Search </h2>
        <input
          type="text"
          placeholder="Search..."
          value={filteredTasks}
          onChange={(e) => setFilteredTasks(e.target.value)}
        />
      </section>

      <section>
        {/* implement a task list that displays all tasks */}
        <ul>
          {fiteredTask.map((task) => (
            <li key={task.id}>
              {task.idEditable ? (
                <>
                  <input
                    type="text"
                    value={task.editText}
                    onChange={(e) =>
                      setTasks(
                        tasks.map((t) =>
                          t.id === task.id
                            ? { ...t, editText: e.target.value }
                            : t
                        )
                      )
                    }
                  />
                  <button onClick={() => handleSave(task.id)}>Save</button>
                </>
              ) : (
                <>
                  <input
                    checked={task.isCompleted}
                    type="checkbox"
                    onChange={() => handleComplete(task.id)}
                  />
                  <span
                    style={{
                      textDecoration: task.isCompleted
                        ? 'line-through'
                        : 'none',
                    }}
                  >
                    {task.task}
                  </span>
                  <button onClick={() => handleDelete(task.id)}>Delete</button>
                  <button onClick={() => handleEdit(task.id)}>Edit</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ToDoList;
