import React from "react"

export default function Todo(props)
{
    
    return (
        <li>
            {props.item.name}
             <input type='checkbox' checked={props.item.done ? true : false} onChange={(event) => {
                 props.handleCheck(props.item, event.target.checked)
            }
          }/>
          &nbsp;&nbsp;
          <input type='button' value='Edit' onClick={()=>{
            props.editTodo(props.item);
          }}/>
          &nbsp;&nbsp;  
          <input type='button' value='X' onClick={()=>{
            props.deleteTodo(props.item)
          }}/>
        </li>
    )
}