import React, { Component } from "react";
import Task2 from "./task2";

class Tasks extends Component {
  render() {
    return this.props.taskService.map((e) => (
      <Task2 e={e} key={e.id} deleteTask={this.props.deleteTask}
      checkDone={this.props.checkDone} />
    ));
  }
}
export default Tasks;
