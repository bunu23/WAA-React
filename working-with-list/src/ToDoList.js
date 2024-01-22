import React from "react";

export const ToDoList=()=>{

const toDoList=[
'Learn JavaScript',
'Learn React',
'Learn Java'

];

return(
<div>

    <h1> Todo list</h1>

<table>
<tbody>
    {toDoList.map(item=>(
        <tr key={item}>
            <td>{item}</td>
        </tr>
    ))}
</tbody>


</table>


</div>


)






}