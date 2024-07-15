import React from 'react';

const Task = ({ task, onDelete }) => {
  const handleDelete = () => {
    onDelete(task._id);
  };

  return (
    <div className="task-manager-card">
      <div className="task-card">
        <div className="task-content">
          <h3>Title: {task.title}</h3>
          <p>Description: {task.description}</p>
        </div>
        <div className="task-actions">
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <div className="status-card">
        <p>Status: {task.status}</p>
      </div>
    </div>
  );
};

export default Task;