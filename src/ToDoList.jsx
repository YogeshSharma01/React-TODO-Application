import React from 'react';

const ToDoList = (props) =>{
    
     return <>
     <div className='todo_style'>
     <i class="fas fa-minus-circle" onClick = {()=>{
         props.onSelect(props.id);
     }}></i>
      <li>{props.text}</li>
      </div>
      </>;
}

export default ToDoList;