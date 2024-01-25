import {useDispatch } from "react-redux";
import { useState } from "react";


const AddTask=()=>{
const dispatch=useDispatch();
const[task,setTask]=useState(""); 

const addTask=()=>{
 dispatch({type:"addTask",task:task})
    }

    return(
        <div>
<h1>Add a task</h1>

<div>
Task:
<input type="text"
placeholder="task"
name="task"
value={task}
onChange={e=>setTask(e.target.value)}></input>
</div>
<button onClick={addTask}>Add Task</button>
        </div>
    )





}

export default AddTask;