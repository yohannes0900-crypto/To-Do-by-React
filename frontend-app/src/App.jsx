// 1. Fix the import here
import { useState } from 'react';
import './App.css';

function App() {
  // 2. Fix the function call here
  const [taskText, setTaskText] = useState("");

  return (
    <div>
      <h1>React To-Do List</h1>
      
      <input 
        type="text" 
        placeholder="Enter a new task..." 
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)} 
      />
      
      <button>Add Task</button>

      <p>You are typing: {taskText}</p> 
    </div>
  );
}

export default App;