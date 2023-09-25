import React from 'react';
import './Task.css';

const Task = ({id,tittle,removetasklists,obj , upadatetaskinlist}) => {
  return (<>
  <div className='task-container'>
    <p className='tittle'>{tittle}</p>
    <div className='icon-div'>
    <span onClick={() => {
        removetasklists(id)
    }} className='icon'>🗑️</span>
    <span onClick={() => {
upadatetaskinlist(id)
    }} className='icon'> 🖋️</span>
    </div>
  </div>
  
  </>
   
  )
}

export default Task
