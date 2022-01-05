import React, { Component } from 'react'
import TodoService from '../services/TodoService'

class ListTodoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                todos: []
        }
        this.addTodo = this.addTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    deleteTodo(id){
        TodoService.deleteTodo(id).then( res => {
            this.setState({todos: this.state.todos.filter(todo => todo.id !== id)});
        });
    }
    viewTodo(id){
        this.props.history.push(`/view-todo/${id}`);
    }
    editTodo(id){
        this.props.history.push(`/update-todo/${id}`);
    }

    componentDidMount(){
        TodoService.getTodos().then((res) => {
            this.setState({ todos: res.data});
        });
    }

    addTodo(){
        this.props.history.push('/add-todo');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Todos List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addTodo}> Add Todo</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Todo Todo</th>                                   
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.todos.map(
                                        todo => 
                                        <tr key = {todo.id}>
                                             <td> {todo.todo} </td>                                               
                                             <td>
                                                 <button onClick={ () => this.editTodo(todo.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteTodo(todo.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewTodo(todo.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListTodoComponent
