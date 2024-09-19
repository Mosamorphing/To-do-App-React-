# React To-Do Application

This is a simple to-do list application built using **React** and **Vite**. It allows users to add, edit, and delete tasks. Tasks can also be filtered by their completion status: All, Active, or Completed.

## Features

- Add new tasks
- Mark tasks as complete or incomplete
- Edit existing tasks
- Delete tasks
- Filter tasks by status: All, Active, or Completed
- Responsive design

## Project Structure

```
.
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── FilterButton.jsx
│   │   ├── Form.jsx
│   │   ├── Todo.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
```

### Components

- **App.jsx**: The main component that manages the state of the tasks and renders the to-do list.
- **FilterButton.jsx**: A button component used to filter tasks based on their status.
- **Form.jsx**: A form component for adding new tasks.
- **Todo.jsx**: A component that renders individual tasks with options to edit, delete, and mark them as complete.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-todo-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd react-todo-app
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the application in your browser:
   ```
   http://localhost:5173
   ```

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web development.
- **nanoid**: A library for generating unique IDs.
- **CSS**: For styling the components and layout.
  
## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs the linter to check for any code errors.
