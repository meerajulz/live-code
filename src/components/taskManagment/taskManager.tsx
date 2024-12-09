import React, { useState } from 'react';

interface ITask {
  id: number;
  title: string;
  isEditable: boolean;
  editText: string;
  isCompleted: boolean;
}

const TaskManager = () => {
  // add data to the task manager
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [taskInput, setTaskInput] = useState<string>('');
  const [filteredTasks, setFilteredTasks] = useState<string>('');

  const handleAddTask = () => {
    const newTask: ITask = {
      id: tasks.length + 1,
      title: taskInput,
      isEditable: false,
      editText: '',
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput('');
  };

  // implement a search input that filters tasks by their titles
  const filterTasks = tasks.filter((task) =>
    task.title.includes(filteredTasks)
  );

  //include a delete button for each task
  const handleDeleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  //reset search results
  const handleResetTasks = () => {
    setFilteredTasks('');
  };

  //edit task
  const handleEditTask = (id: number) => {
    // implement the ability to edit task details directly from the list
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isEditable: !task.isEditable,
          };
        }
        return task;
      })
    );
  };

  const handleSaveTask = (id: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isEditable: false,
            title: task.editText,
          };
        }
        return task;
      })
    );
  };

  //add the ability to mark tasks as completed
  const handleCompleteTask = (id: number) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <section style={{ padding: '20px' }}>
        <h2>Add new task</h2>
        <input
          type="text"
          placeholder="Enter a new task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </section>

      <section style={{ padding: '20px' }}>
        {/* // implement a search input that filters tasks by their titles   */}
        <input
          type="text"
          placeholder="Search..."
          value={filteredTasks}
          onChange={(e) => setFilteredTasks(e.target.value)}
        />
        <button onClick={handleResetTasks}>Reset</button>
      </section>

      <section>
        <h2>Tasks</h2>
        <ul>
          {filterTasks.map((task) => (
            <li key={task.id}>
              {task.isEditable ? (
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
                  <button onClick={() => handleSaveTask(task.id)}>Save</button>
                </>
              ) : (
                <>
                  <input
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={() => handleCompleteTask(task.id)}
                  />
                  <span
                    style={{
                      textDecoration: task.isCompleted
                        ? 'line-through'
                        : 'none',
                    }}
                  >
                    {task.title}
                  </span>

                  <button onClick={() => handleDeleteTask(task.id)}>
                    Delete
                  </button>
                  <button onClick={() => handleEditTask(task.id)}>Edit</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TaskManager;
