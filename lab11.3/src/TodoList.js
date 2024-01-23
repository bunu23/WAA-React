import React,{useState} from "react";


export const TodoList=(props)=>{

    const cleanTask={name:""};
    const[task,setTask]=useState(cleanTask)

    const[doneList,setDoneList]=useState([]);
    const[todoList,SetTodoList]=useState([]);

    const doneTask=(e)=>{
        const newTodoList=todoList.filter((t)=>t.id!==e.target.value);
        const rem=todoList.find((t)=>t.id===e.target.value);
        SetTodoList(newTodoList);
        setDoneList([...doneList,rem]);
    }

    const undoneTask=(e)=>{

    const newDoneList=doneList.filter((t)=>t.id!==e.target.value);   
    const rem=doneList.find((t)=>t.id===e.target.value);
    setDoneList(newDoneList);
    SetTodoList([...todoList,rem]);
    }


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(task.name){
            const t={id:""+(todoList.length+doneList.length+1), name:task.name};
            SetTodoList([...todoList,t]);
        }
        setTask(cleanTask);
    }

    const handleFieldChange=(e)=>{
        setTask({...task,[e.target.name]:e.target.value});
    }


    return(
        <div>
<h2>Add a new Task</h2>

<form onSubmit={handleSubmit}>
<div>
    Task
    <input type="text"
    placeholder="Enter task"
    name="name"
    value={task.name}
    onChange={handleFieldChange}></input>
    </div>
    <div>
        <button type="submit">Add to todo list </button>
    </div>
</form>

<hr></hr>
<br></br>

<h3>Done list</h3>
<table>
    <thead>
        <tr>
            <th>Task:</th>
        </tr>
    </thead>


    <tbody>
        {todoList.map(t=>(
           <tr key={t.id}>

<td>{t.name}</td>
<td><button onClick={doneTask}
value={t.id}>
    Move to done
    </button></td>

           </tr> 
        ))}
    </tbody>
</table>
<hr></hr>
<br></br>
<h3>Done List</h3>
<table>
    <thead>
        <tr>
            <th>Task:</th>
        </tr>
    </thead>
<tbody>

    {doneList.map(t=>(
        <tr key={t.id}>

    <td>{t.name}</td>
    <td>
        <button onClick={undoneTask}
        value={t.id}>Move to todo </button>
    </td>
        </tr>
    ))}
</tbody>

</table>

        </div>
    )


}