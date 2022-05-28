import React, { Component } from "react";
import "./App.css";
import taskService from "./Sample/taskService.json";
import Tasks from "./Components/tasks";
import TaskForm from "./Components/taskForm";

class App extends Component {
  state = {
    taskService: taskService,
  };

  addTask = (title, autor, year) => {
    const newTask = {
      title: title,
      autor: autor,
      year: year,
      id: this.state.taskService.length,
    };
    this.setState({
      taskService: [...this.state.taskService, newTask],
    });
  };

  deleteTask = (id) => {
  const newTask=  this.state.taskService.filter(tasks => tasks.id !== id);
  this.setState({taskService:newTask})
  console.log(newTask);
  }

  checkDone = id => {
  const newTasks = this.state.taskService.map(task=>  {
      if (task.id === id){
        task.done= !task.done
      }    
    return task;})
    this.setState({taskService: newTasks})
  };

  render() {
    return (
      <div>
        <TaskForm addTask={this.addTask} />
        <Tasks
          deleteTask={this.deleteTask}
          taskService={this.state.taskService}
          checkDone={this.checkDone}
        />
        
      </div>
    );
  }
}
export default App;
