import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Define your DATA array
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Code", completed: false },
  { id: "todo-2", name: "Sleep", completed: false },
];

// Get the root DOM element and render the App component
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App tasks={DATA} />  {/* Pass tasks as a prop here */}
  </StrictMode>
);
