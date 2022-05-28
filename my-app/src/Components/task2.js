import React, { Component } from "react";

class Task2 extends Component {
  StyleCompleted() {
    return {
      fontSize: "20 px",
      color: this.props.e.done ? "black":"gray",
      textDecoration: "none"
    };
  }
  render() {
    const { e } = this.props;
    return (
      <div style={this.StyleCompleted()} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
        {e.title} <br/>
        {e.autor}<br/>
        {e.year}<br/>
        {e.id}<br/>

        <button
          style={this.StyleCompleted()}
          onClick={this.props.deleteTask.bind(this,e.id)}
        >
          X
        </button>
        <input type="checkbox" onChange={this.props.checkDone.bind(this, e.id)}/>
      </div>
    );
  }
}
export default Task2;
