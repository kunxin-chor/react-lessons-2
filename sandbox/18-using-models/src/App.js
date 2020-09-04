import React from 'react';
import EditTodo from './components/EditTodo'
import TodoList from './components/TodoList'
import TodoListModel from './models/TodoListModel'

class App extends React.Component {
  
  state = {
    new_todo_name:"",
    editing_todo:false,
    currently_edited_todo : {
      id:0,
      name:"",
      done:false
    },
    model:new TodoListModel()
    
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
    const updatedModel = Object.assign(new TodoListModel(),this.state.model);
    updatedModel.addTodo(this.state.new_todo_name)
    
    // spread out the original items, and add it the new one at the back
    this.setState({
      model:updatedModel,
      new_todo_name:""
    })
  }
  
  deleteTodo(itemToDelete) {
    const updatedModel = Object.assign(new TodoListModel(),this.state.model);
    updatedModel.deleteTodo(itemToDelete);
    
    this.setState({
      model:updatedModel,
    })
  }
  
  updateTodo(updatedTodo) {
    const updatedModel = Object.assign(new TodoListModel(),this.state.model);
    updatedModel.updateTodo(updatedTodo);
    
    this.setState({
      model:updatedModel,
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
    console.log(todo, newDone);
    const updatedModel = Object.assign(new TodoListModel(),this.state.model);
    updatedModel.handleTodoCheckbox(todo, newDone);
    
    this.setState({
      model:updatedModel
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
          <TodoList items={this.state.model.items}
            handleCheck={this.handleTodoCheckbox}
            editTodo={this.editTodo}
            deleteTodo={this.deleteTodo}
            
          />
          
            
        <h1 className="title">Add a new Todo</h1>
        <div>
          <div className='field'>
            <label className='label'>Name</label>
            <div className='control'>
              <input className='input' value={this.state.new_todo_name}  placeholder='Todo name' type='text' name='todo-name' onChange={this.handleChange} /> <br/>
            </div>
         
          </div>
          <input type='button' className='button is-link' value='Add' onClick={this.addTodo}/>
        </div>
        </div>
      </div>
  )    
  };
}

export default App;
