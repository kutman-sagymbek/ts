import React, {useEffect, useState} from "react";
import deleteBasket from '../../../src/img/icons8-multiply-48.png';
import {Link} from "react-router-dom";
import axios from "axios";
import AddTodo from "./AddTodo";

const Todo = ()=> {
    const [todo, setTodo] = useState([]);


        const url = 'http://localhost:3030/posts';

        const getAllTodos = () => {

            axios.get('http://localhost:3030/posts')
                .then(res => {
                    setTodo(res.data)
                    console.log(res.data)
                })
                .catch(err => console.log(err))
        }

        useEffect(()=> {
            getAllTodos()
        },[])



    const deleteTodo = (id) => {
        // console.log(id)
        //     const url = 'http://localhost:3030/posts/' + id;
        //     const options = {
        //         method: 'DELETE'
        //     }


            axios.delete(`http://localhost:3030/posts/${id}`)
                .then(res => {
                    getAllTodos()
                } )
                .catch(err => console.log(err))

    }


 return (
     <div className="todo-center">
         <div className="todo-cards">
             {
                 todo.map(item => {
                     const key = item.id
                     console.log(item)
                     return( <div className="todo-card">
                         <p>{item.id}</p>
                         <p id="task-text">{item.title}</p>

                         <img onClick={() => {deleteTodo(item.id)}} src={deleteBasket} className="cross"/>
                     </div>)

                 })
             }

             <Link to={'/'}>
                 <button className="addNewTask">Add New Task</button>
             </Link>
         </div>
     </div>
 )
}

    export default Todo;