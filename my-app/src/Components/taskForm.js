import React, { Component } from 'react'

class TaskForm extends Component{
    onSubmit = e =>{
        e.preventDefault();       
    }
    onChange= e =>{
        console.log(e.target.value)
    }
render(){
    return(
        <div>
            <form onSubmit={this.onSubmit}>
            <input type="text" onChange={this.onChange} className='bg-tahiti'  />
            <button type='submit' >que pedio jeje</button>
            </form>
         
            <h2>Hola que tal</h2>
        </div>
    )
}


}


export default TaskForm;
