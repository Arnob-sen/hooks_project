import React from "react";
import { useState,useEffect } from "react";
import AddNewTodo from "./AddNewTodo";
const Todolist=()=>{
   const [todos,setTodos] =useState([

        {Text:'pay bills',id :1},
        {Text:'feed the dog',id :2},
        {Text:'do home work',id :3}
    ]);//intila value of state is useState and setTodos is the function of update the state.this usestate return an array of 2 item.the 1st item say the actual value of state.sencond item give a function to update state
    const [count,setCount]=useState(0);
    const addTodo=(Text)=>
    {
        setTodos([
            ...todos,
            {Text,id :Math.random()}
        ]);
    }
    useEffect(()=>{
        console.log('use effect',todos);
    },[todos])
    useEffect(()=>{
        console.log('use effect',count);
    },[count])
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
         <AddNewTodo addTodo={addTodo}/>
         <button onClick={()=>setCount(count+1)}>score:{count}</button>
         
        </div>
    )

}
export default Todolist