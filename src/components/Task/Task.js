import React from 'react';
import './Task.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen} from '@fortawesome/free-solid-svg-icons';

const Task = ({id,tittle,removetasklists,obj , upadatetaskinlist}) => {
  return (<>
  <div className='task-container'>
    <p className='tittle'>{tittle}</p>
    <div className='icon-div'>
    <span onClick={() => {
        removetasklists(id)
    }} className='icon'>  <FontAwesomeIcon icon={faTrash} /> </span>
    
  
    <span onClick={() => {
upadatetaskinlist(id)
    }} className='icon'> <FontAwesomeIcon icon={faPen} /></span>
    </div>
  </div>
  
  </>
   
  )
}

export default Task
