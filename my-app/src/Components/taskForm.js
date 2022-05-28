import React, { Component } from "react";

class TaskForm extends Component {
  state = {
    title: "",
    year: "",
    autor: "",
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.title, this.state.autor, this.state.year);
  };
  onChange = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-3 mb-4"
          onSubmit={this.onSubmit}
        >
          <label class="mx- text-dada-300 text-sm font-bold mb-2" for="title">
            Nombre
          </label>
          <input
            type="text"
            name="title"
            onChange={this.onChange}
            value={this.state.title}
            className="shadow appearance-none border rounded w-50 py-2 px-3 mx-2 text-brown-700 leading-tight focus:outline-none focus:shadow-outline"
          ></input>
          
          <label class="mx-2 text-dada-700 text-sm font-bold mb-2" for="autor">
            Autor
          </label>
          <input
            type="text"
            name="autor"
            onChange={this.onChange}
            value={this.state.autor}
            className="shadow appearance-none border rounded w-50 py-2 px-3 text-brown-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label class="mx-2 text-dada-700 text-sm font-bold mb-2" for="year">
            Año
          </label>
          <input
            type="text"
            name="year"
            onChange={this.onChange}
            value={this.state.year}
            className="shadow appearance-none mx-4 border rounded w-50 py-2 px-3 text-brown-700 leading-tight focus:outline-none focus:shadow-outline"
          />

          <button
            className="border border-brown-200 mx-4 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-dada-100 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default TaskForm;
