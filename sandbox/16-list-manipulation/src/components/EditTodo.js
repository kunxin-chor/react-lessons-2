import React from "react"

export default class EditTodo extends React.Component {
    state = {
        id:0,
        todo_name: "",
        done: false,
    }

    constructor(props) {
        super(props);
        this.updateTodo = this.updateTodo.bind(this);
        this.handleChange  = this.handleChange.bind(this);
    }

    componentDidMount() {
   
        this.setState({
            id:this.props.item.id,
            todo_name:this.props.item.name,
            done:this.props.item.done
        });
    }
    
    updateTodo() {
        console.log("Update todo detected")
        this.props.update({
            id: this.state.id,
            name: this.state.todo_name,
            done: this.state.done
        })
    }
    
    handleChange(event) {
        
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
          [name]: value
        });
    }

    render() {
        return (
            <div className="modal" style={{display:this.props.visible ? "flex" : "none"}}>
              <div className="modal-background"></div>
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title">Modal title</p>
                  <button className="delete" aria-label="close"></button>
                </header>
                <section className="modal-card-body">
               
                    <div>
                      <div className='field'>
                        <label className='label'>Name</label>
                        <div className='control'>
                          <input className='input' value={this.state.todo_name}  placeholder='Todo name' type='text' name='todo_name' onChange={this.handleChange} /> <br/>
                        </div>
                      </div>
                      
                      <div className='field'>
                        <label className='label'>Done</label>
                        <div className='control'>
                            <input className="checkbox" checked={this.state.done} type='checkbox' onChange={this.handleChange} />
                        </div>
                      </div> 
                    </div>
               
                </section>
                <footer className="modal-card-foot">
                  <button className="button is-success" onClick={this.updateTodo}>Save changes</button>
                  <button className="button">Cancel</button>
                </footer>
              </div>
            </div>
        )
    }
}
