import { useState } from "react";
import { nanoid } from "nanoid";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";


function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  // Function to toggle task completion status
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // If the task's id matches the id passed into the function
      if (id === task.id) {
        // Toggle the completed property of the task
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks); // Update the tasks state with the modified tasks
  }

  // Function to add a new task
  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]); // Update state to include the new task
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }  
  

  // Creating task list for rendering
  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted} // Passing the toggle function to Todo component
      deleteTask={deleteTask}
    />
  ));

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
