import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import ToDoForm from './components/ToDoForm'
import {tasks} from './tasks.json';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(toDo){
    this.setState({
        tasks: [...this.state.tasks, toDo]
    })
  }

  removeToDo(index){
    if(window.confirm('Are you sure you want to delete it?'))
      this.setState({
        tasks: this.state.tasks.filter((e,i) => {
          return i !== index
        })
      });
  }

  render(){
    const todos = this.state.tasks.map((task,i)=>{
      return(
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{task.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {task.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{task.description}</p>
              <p><mark>{task.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button
              className="btn btn-danger"
              onClick={this.removeToDo.bind(this, i)}
              >
              Delete
              </button>
            </div>
          </div>
        </div>
      )
    })

    return(
      <div className="App">
        <Navigation title="Tasks" length={this.state.tasks.length}/>
        <Navigation/>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <ToDoForm onAddTodo={this.handleAddTodo}/>
            </div>
            <div className="col-md-9">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}


export default App;
