import React, { Component } from 'react'

class TaskForm extends Component{
    state={
        title: ''
    }
    onSubmit = e =>{
        e.preventDefault();    
        console.log(this.state)   
    }
    onChange= e =>{
        console.log(e.target.name,e.target.value)
       this.setState({
           [e.target.name] : e.target.value
       })
    }
render(){
    return(
        <div>
            <form onSubmit={this.onSubmit}>
            <input type="text" name='title' onChange={this.onChange} value={this.state.title} className=''  />
            <button type='submit' >que pedio jeje</button>
            </form>
         
            <h2>Hola que tal</h2>
        </div>
    )
}


}


export default TaskForm;
