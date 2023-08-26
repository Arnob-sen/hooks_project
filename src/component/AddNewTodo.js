import React from "react";
import { useState } from "react";
const AddNewTodo=()=>{
   const [todos,setTodos]= useState('');
    return(
        <from>
            <label htmlFor="todo">to do</label>
            <input type="text" id="todo" value={todos} onChange={(e)=>setTodos(e.target.value)} />
            <input type="submit"/>
        </from>
    )
}
export default AddNewTodo;