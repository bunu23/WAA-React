import {useSelector} from "react-redux"

const TodoList=()=>{

    const tasks=useSelector(state=>state.tasks);
  const value=useSelector(state=>state.calcValue);

    return(
<div>
    <h1>Calculator Value: {value}</h1>
<h1> TodoList</h1>

<table>
    <tbody>
        {tasks.map(task=>(
<tr key={task}>
    <td>{task}</td>
</tr>
   ))}
    </tbody>
</table>
</div>

    )


}

export default TodoList;