import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Import your CSS file
import Task from './Task'; // Import Task component

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', status: 'To Do' });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('https://to-do-list-backend-tau.vercel.app/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const createTask = async () => {
    try {
      const response = await axios.post('https://to-do-list-backend-tau.vercel.app/api/tasks', newTask);
      setTasks([...tasks, response.data]);
      setNewTask({ title: '', description: '', status: 'To Do' });
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`https://to-do-list-backend-tau.vercel.app/api/tasks/${taskId}`);
      const updatedTasks = tasks.filter(task => task._id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  return (
    <div className="task-manager-container">
      <h1>Task Manager</h1>
      <div className="task-form">
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={newTask.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Task Description"
          value={newTask.description}
          onChange={handleInputChange}
        />
        <button onClick={createTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasks.map(task => (
          <Task key={task._id} task={task} onDelete={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default App;
