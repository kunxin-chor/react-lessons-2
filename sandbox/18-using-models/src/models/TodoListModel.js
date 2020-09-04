export default class TodoListModel {
    items = [
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
        
        
    ];
    
    addTodo(new_todo_name) {
        let new_todo = {
          id: Math.floor(Math.random()*1000000) + 100000,
          name: new_todo_name,
          done: false
        }
        
        // spread out the original items, and add it the new one at the back
        this.items = [...this.items, new_todo]
         
    }
    
    deleteTodo(itemToDelete) {
    // find the index
    let index = this.items.findIndex( i => i.id === itemToDelete.id);
    const updatedItems = [
        ...this.items
    ];
  
    updatedItems.splice(index,1);
    this.items = updatedItems;

  }
  
  updateTodo(updatedTodo) {
      let index = this.items.findIndex( i => i.id === updatedTodo.id);
      const newItems = [...this.items];
      newItems[index] = updatedTodo;
    
      this.items = newItems;

  }
  
  
  handleTodoCheckbox(todo, newDone) {
    
   
    let index = this.items.findIndex( i => i.id === todo.id);
    const newItems = [...this.items];
    newItems[index] = {
      ...todo,
      done:newDone
    };
    
    this.items = newItems;
  }
 
}