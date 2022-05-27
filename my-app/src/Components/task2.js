import React, { Component } from 'react'
import TaskForm from "./taskForm"


class Task2 extends Component{
    StyleCompleted(){
        return{
            fontSize: '20 px',
           
        }
        
    }
    render(){
        const {e}= this.props
        return <div className=' pt-6 md:p-8 text-center outline-tahiti color-tahiti outline '>  
         {e.title}      
      
      <button style={this.StyleCompleted()}>X</button>
      <input type="checkbox"></input>
      <TaskForm/>
        </div>
    }
}
export default Task2;
