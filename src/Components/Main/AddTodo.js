import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';



function AddTodo () {

    const [input,setInput]=useState("");
    // const saveData = (data) => {
    //     console.log(data);
    //     const url = 'http://localhost:3004/todos';
    //
    //     const options = {
    //         method: 'POST',
    //         header: {
    //             "Content-Type":"application/json"
    //         },
    //         body: JSON.stringify(data)
    //     }
    //
    //     fetch(url, options)
    //         .then(response => response.json())
    //         .then(data => console.log(data))
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:3030/posts`,{
            title:input
        }).then(res => {
            console.log(res.data)
        }).catch(err => console.log(err))
        console.log(input);
    }

    return (
        <div className="tod-box">
            <form onSubmit={handleSubmit}>
                <input onChange={(event)=> {
                    setInput(event.target.value)
                }} type="text" id="todo_input" placeholder="WHAT IS THE TASK TODAY?"/>
                <input type="submit" value="Add Task" className="todo_btn" />
            </form>
            <Link to={'/Todo'}>
                <button  className="my-tasks">MY TASKS</button>
            </Link>
        </div>
    )
}

export default AddTodo;