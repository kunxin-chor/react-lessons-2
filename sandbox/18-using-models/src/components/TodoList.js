import React from "react"
import Todo from "./Todo"

export default function TaskList(props)
{
    
     const listItems = props.items.map( (i) => {
      return <Todo item={i} 
                   handleCheck={props.handleCheck}
                   editTodo={props.editTodo}   
                   deleteTodo={props.deleteTodo}
                   key={i.id}
     />
     });
    
    return listItems;
}