import React from 'react';
import EditTodo from './components/EditTodo'
import TodoList from './components/TodoList'

class App extends React.Component {
  
  state = {
    new_todo_name:"",
    editing_todo:false,
    currently_edited_todo : {
      id:0,
      name:"",
      done:false
      
    },
    items:[
      {
        id: 1,
        name:"Walk the dog",
        done:false
      },
      {
        id: 2,
        name: "Wash my clothes",
        done:false
      },
      {
        id: 3,
        name: "Get more rice",
        done: true
      }
    
    ]
  }
  
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.handleTodoCheckbox = this.handleTodoCheckbox.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  
    
  }
  
  handleChange(event) {
    this.setState({
      new_todo_name: event.target.value
    })
  }
  
  addTodo() {
    let new_todo = {
      id: Math.floor(Math.random()*1000000) + 100000,
      name: this.state.new_todo_name,
      done: false
    }
    
    // spread out the original items, and add it the new one at the back
    this.setState({
      items : [...this.state.items, new_todo],
      new_todo_name:""
    })
  }
  
  deleteTodo(itemToDelete) {
    // find the index
    let index = this.state.items.findIndex( i => i.id === itemToDelete.id);
    const updatedItems = [
        ...this.state.items
    ];
    updatedItems.splice(index,1)
    this.setState({
      items:updatedItems
    })
  }
  
  updateTodo(updatedTodo) {
      let index = this.state.items.findIndex( i => i.id === updatedTodo.id);
      const newItems = [...this.state.items];
      newItems[index] = updatedTodo;
    
    this.setState({
      items: newItems
    })
    
    this.setState({
      currently_edited_todo: {
        id:0,
        name:"",
        done:false
      },
      editing_todo:false
    });
  }
  
  editTodo(todo) {
    console.log(todo);
    this.setState({
      editing_todo: true,
      currently_edited_todo: {...todo}
    })
    
  }
  
  handleTodoCheckbox(todo, newDone) {
    
     // method: 1
    // let updatedItems= this.state.items.map(function(eachItem){
      
    //   if (eachItem.id === todo.id) {
    //     const updatedItem = {
    //       ...eachItem,
    //       done:newDone
    //     }
        
    //     return updatedItem;
    //   }
    //   else {
    //     return eachItem;
    //   }
      
    // })
    
    // this.setState({
    //   items:updatedItems
    // })
    
    let index = this.state.items.findIndex( i => i.id === todo.id);
    const newItems = [...this.state.items];
    newItems[index] = {
      ...todo,
      done:newDone
    };
    
    this.setState({
      items: newItems
    })
    
  }
  
  render() {
    
     return (
      <div className='container'>
       <EditTodo visible={this.state.editing_todo} 
                 item={this.state.currently_edited_todo} 
                 key={this.state.currently_edited_todo.id}
                 update={this.updateTodo}
                 />
        <div className='content'>
          <TodoList items={this.state.items}
            handleCheck={this.handleTodoCheckbox}
            editTodo={this.editTodo}
            deleteTodo={this.deleteTodo}
            
          />
        </div>
      </div>
  )    
  };
}

export default App;
