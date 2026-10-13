// 1. Fix the import here
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // 2. Fix the function call here
  const [taskText, setTaskText] = useState("");

  const [tasks,setTasks]=useState(()=>{
    const savedTasks=localStorage.getItem("reactTasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(()=>{
    localStorage.setItem("reactTasks", JSON.stringify(tasks));
  },[tasks]);



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
    <div className='app-container'>
      <h1>React To-Do List</h1>
      <div className='input-group'>
      <input 
        type="text" 
        placeholder="Enter a new task..." 
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)} 
      />
      
      <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul className='task-list'>
        {tasks.map((task, index) => (
          <li key={index} className='task-list'>
            <span className='task-text'>{tasks}</span>
          <button className='delete-btn' onClick={()=> handleDelete(index)}> Delete</button>
          
          </li>
        ))}
      </ul>

     
    </div>
  );
}

export default App;