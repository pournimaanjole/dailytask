import React from 'react';
import './Task.css';

const Task = ({id,tittle,removetasklists,obj}) => {
  return (<>
  <div>
    <h1>{tittle}</h1>
    <span onClick={() => {
        removetasklists(id)
    }}>🗑️</span>
    <span onClick={() => {

    }}> 🖋️</span>
  </div>
  
  </>
   
  )
}

export default Task
