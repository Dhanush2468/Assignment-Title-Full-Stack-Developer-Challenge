# Task Management Application

## Introduction

This is a simple task management application that allows users to create, update, and delete tasks. Tasks have a title, description, and a status (e.g., "To Do," "In Progress," "Done"). Users can view a list of tasks and filter them by status.

## Features

- Create, update, and delete tasks.
- Filter tasks by status ("All," "To Do," "In Progress," "Done").
- Form validation to ensure tasks cannot be created without a title.
- Responsive design for both desktop and mobile devices.
- RESTful API for handling CRUD operations.
- Firebase for database and authentication (if using frontend approach).

## Assumptions

- Users will not need authentication for basic CRUD operations, but it can be added as a bonus feature.
- Task statuses are predefined and limited to "To Do," "In Progress," and "Done."
- No real-time updates; the application requires manual refresh to see changes made by other users.

## Technologies Used

### Front-End
- Framework: React.js
- Styling: CSS (or SCSS)
- State Management: Redux (optional)
- Routing: React Router (optional)

### Back-End
- Framework: Node.js with Express
- Database: Firebase Firestore (if using frontend approach) or MongoDB (for a separate backend)
- API: RESTful API

### Additional Tools
- Version Control: Git
- Testing: Jest, React Testing Library

## Setup and Installation For Local


### Back-End

1. Clone the repository:
   ```sh
   git clone https://github.com/Dhanush2468/Assignment-Title-Full-Stack-Developer-Challenge.git
   cd backend

2. Install dependencies:
   ```sh
      npm install
3. Setup Your Database server using mongodb and copy the url and store in .env file
example .env
```
MONGODB_URL=mongodb+srv://(your mongidb url)
PORT=5000
```

4. Start the development server:
   ```sh
      node server.js
```
Node.js Driver version 4.0.0 and will be removed in the next major version
Server is running on port 5000
MongoDB connected
```

### Now Come To Front End
### Front-End
```sh
  cd front-end
  npm install
  npm start
```
### COMING TO THE CODE CHANGES WHEN YOU DEPOLOYE YOUR SERVER IN ANOTHER PLATFORM LIKE (VERCEL,NETLIFY ETC..)
```
BACKEND END POINT
example 
https://to-do-list-backend-tau.vercel.app/api/tasks
```
### now come to front end code

STEP 1

GO TO APP.JS FILE

```
const fetchTasks = async () => {
    try {
      const response = await axios.get('https://localhost:5000/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const createTask = async () => {
    try {
      const response = await axios.post('https://localhost:5000/api/tasks', newTask);
      setTasks([...tasks, response.data]);
      setNewTask({ title: '', description: '', status: 'To Do' });
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await axios.delete(`https://localhost:5000/api/tasks/${taskId}`);
      const updatedTasks = tasks.filter(task => task._id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
```

HERE 

```
https://localhost:5000/api/tasks replace with https://to-do-list-backend-tau.vercel.app/api/tasks
```

#### NOW YOUR HOSTED BACKEND WAS SUCESSFULLY LINKED TO FRONT END
### Now HIT this cmd in your teminal
```
npm start
```

### DEPLOYED IN VERCEL.APP
```
https://to-do-list-three-pearl.vercel.app/
```
 
OUTPUT
![image](https://github.com/user-attachments/assets/ee38eaf7-7f1b-4a70-8fca-7e9f404fa561)

MORE EXPLANATION GOT WATCH MY LOOM VIDEO
```
https://www.loom.com/share/ce2455d86f9146c0b122fe5d7ccaa522?sid=c9c94da1-81d8-4cb2-90fd-58fd83d31482
```

