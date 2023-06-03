import React, { Component } from 'react'
import "./Component.css"
export default class ClassCompo extends Component {

    state={
        name:"",
        department:"",
        rating:"",
        data:[]
    }
handelChange=(event)=>{   
        this.setState({[event.target.name]:event.target.value})
        this.setState({[event.target.department]:event.target.value})
        this.setState({[event.target.rating]:event.target.value})
    }

handelClick=()=>{
    const obj={
        name:this.state.name,
        department:this.state.department,
        rating:this.state.rating

    }
    const arr=this.state.data;
    arr.push(obj);
    this.setState({[this.state.data]:arr});
    console.log(this.state.data)
        console.log(this.state.name)

    }


  render() {
    return (
      <>
         <div className='form'>
            <label>Name</label>
            <input type='text' placeholder='Enter your name' name='name' onChange={this.handelChange}></input><br></br> 
         
          <label>department</label>
         <input type='text' placeholder='Enter department' name='department' onChange={this.handelChange}></input><br></br>
         
         <label>Rating</label>
         <input type='text' placeholder='Enter your rating' name='rating' onChange={this.handelChange}></input><br></br>
         <button onClick={this.handelClick}>Sumbit</button>
         </div>
         <div className='parent'>
         {this.state.data.map((item,index)=>{
            return(
                <div className="data">
                <h1 key={index}>Name:{item.name}  department:{item.department}  rating:{item.rating}</h1>
         </div>
            )
            })}
            </div>
         </>
         )}
         }
