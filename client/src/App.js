import React, { useEffect, useState } from 'react'
import "./App.css"

function App() {

  const [backendData, setBackendData] = useState([{}])
  const [completedTasks, setCompletedTasks] = useState([{}])

  useEffect( () => {
    fetch("http://localhost:5000/myapi").then( 
      response => response.json()
    ).then(
      data => {setBackendData(data)}
    )
  }, [])

  return (
    <div className='tasks-body'>
      <h1 className='tasks-header'>Todo</h1>
      <div className="tasks-table">
        {(typeof backendData.tasks === "undefined") ? 
          (<p> Loading....</p>): 
          backendData.tasks.map( (task, i) => (
            <div className='task'>
              <label><input type='checkbox'></input></label>
              <p key={i} className='task-text'>{task}</p>
            </div>))
        }
      </div>

    </div>
  )
} 

export default App
