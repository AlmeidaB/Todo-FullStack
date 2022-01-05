import React, { Component } from 'react'
import TodoService from '../services/TodoService';

class UpdateTodoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            todo: '',
            description: ''
            
        }
        this.changeTodoHandler = this.changeTodoHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }

    componentDidMount(){
        TodoService.getTodoById(this.state.id).then( (res) =>{
            let todo = res.data;
            this.setState({todo: todo.todo,
                description: todo.description,
                emailId : todo.emailId
            });
        });
    }

    updateTodo = (e) => {
        e.preventDefault();
        let todo = {todo: this.state.todo, description: this.state.description};
       
        TodoService.updateTodo(todo, this.state.id).then( res => {
            this.props.history.push('/todos');
        });
    }
    
    changeTodoHandler= (event) => {
        this.setState({todo: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    cancel(){
        this.props.history.push('/todos');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Todo</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Todo: </label>
                                            <input placeholder="Todo" name="todo" className="form-control" 
                                                value={this.state.todo} onChange={this.changeTodoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <textarea placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>                            

                                        <button className="btn btn-success" onClick={this.updateTodo}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateTodoComponent
