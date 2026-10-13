// 1. Fix the import here
import { useState } from 'react';
import './App.css';

function App() {
  // 2. Fix the function call here
  const [taskText, setTaskText] = useState("");

  const [tasks, setTasks]=useState([]);

  const handleAddTask=()=>{
    if(taskText==""){
      alert("please enter a task first");
      return;
    }

    setTasks([...tasks,taskText]);

    setTaskText("");
  };

  const handleDelete=(indexToremove)=>{
    const updateTasks=tasks.filter((task,index)=>index !==indexToremove);

    setTasks(updateTasks);
  };

  return (
    <div>
      <h1>React To-Do List</h1>
      
      <input 
        type="text" 
        placeholder="Enter a new task..." 
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)} 
      />
      
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{tasks}
          <button onClick={()=> handleDelete(index)} style={{marginLeft:"10px"}}>❌</button>
          
          </li>
        ))}
      </ul>

     
    </div>
  );
}

export default App;