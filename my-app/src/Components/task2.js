import React, { Component } from 'react'

class Task2 extends Component{
    render(){
        return <div className='quepedo'>  
         {this.props.e.title}      
      
      <button>X</button>
      <input type="checkbox"></input>
        </div>
    }
}
export default Task2;
