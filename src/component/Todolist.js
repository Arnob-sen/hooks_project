import React from "react";
import { useState } from "react";
const Todolist=()=>{
   const [todos,setTodos] =useState([

        {Text:'pay bills',id :1},
        {Text:'feed the dog',id :2},
        {Text:'do home work',id :3}
    ]);//intila value of state is useState and setTodos is the function of update the state.this usestate return an array of 2 item.the 1st item say the actual value of state.sencond item give a function to update state
    const AddTodo=()=>
    {
        setTodos([
            ...todos,
            {Text:'learn hooks',id :Math.random()}
        ]);
    }
    return(
        <div>
            <ul>
             {todos.map((todo)=>

             {
                return(
                <li key={todo.id}>{todo.Text}</li>
                )
             }
             )}
            </ul>
            <button onClick={AddTodo} >ADD TODO</button>
        </div>
    )

}
export default Todolist