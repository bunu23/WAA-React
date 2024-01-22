import React from "react";

export const UsersList=()=>{

    const initialList=[

        {userid:1,firstName:"Frank", lastName:"Brown", email:"Frank@gmail.com"},
        {userid:2, firstName:"John",lastName:"Doe",email:"d33@gmail.com"},
        {userid:3, firstName:"Mary", lastName:"Jones",email:"mary@gmail.com"}
    ];


    return(
<div>
   
<h1>Users</h1>

<table>

<tbody>

<thead>
    <tr>
        <th>Userid</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
    </tr>
</thead>

<tbody>
    {initialList.map(user=>(
<tr key={user.userid}>
    <td>{user.userid}</td>
    <td>{user.firstName}</td>
    <td>{user.lastName}</td>
    <td>{user.email}</td>
</tr>

    ))}
</tbody>



</tbody>

</table>


</div>

    )



}