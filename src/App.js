import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./features/taskSlice";
import "./App.css";

function App() {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks.taskList);

  const handleAddTask = () => {
    // Prevent empty tasks
    if (task.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }

    dispatch(addTask(task));

    setTask("");
  };

  return (
    <div className="container">
      <h1>Redux Task App</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <div className="task-list">
        <h2>Task List</h2>

        {tasks.length === 0 ? (
          <p>No tasks added yet.</p>
        ) : (
          <ul>
            {tasks.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
