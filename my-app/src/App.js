import React, { Component } from "react";
import "./App.css";
import taskService from "./Sample/taskService.json";
import Tasks from "./Components/tasks";

class App extends Component {
  state= {
    taskService: taskService
  }
  render() {
   return <div>
     {<Tasks taskService={this.state.taskService}/>}
   </div>
  }
}
export default App;
