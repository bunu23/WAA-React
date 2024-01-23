import React,{useState} from "react";


export const UsersList=()=>{
const cleanUser={userid:"",firstName:"",lastName:"",email:""};
const[user,setUser]=useState(cleanUser);

    const initialList=[
{userid:"1", firstName:"Frank", lastName:"Jones",email:"Frank33@gmail.com"},
{userid:"2", firstName:"John", lastName:"Does", email:"joh33@gmail.com"}
 ];
const[userList,setUserList]=useState(initialList);

const handleSubmit=(e)=>{
    if(user){
        setUserList(userList.concat(user));
    }
    setUser(cleanUser);
    e.preventDefault();
}


const handleFieldChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
}
const removeUser=(e)=>{
const newUserList=userList.filter((user)=>user.userid!==e.target.value);
setUserList(newUserList);
}

 return(
<div>

<h1>Users</h1>
<hr></hr>

<table>
<tr>
    <th>Userid</th>
    <th>First name</th>
    <th>Last name</th>
    <th>Email</th>

</tr>

{userList.map(user=>(
<tr>
    <td>{user.userid}</td>
    <td>{user.firstName}</td>
    <td>{user.lastName}</td>
    <td>{user.email}</td>
    <td><button onClick={removeUser} value={user.userid}>Remove</button></td>
</tr>
))}
</table>
<hr></hr>

<p><h2>Add a new user</h2></p>
<form onSubmit={handleSubmit}>

<div>
    Userid
    <input type="text"
    placeholder="userid"
    name="userid"
    value={user.userid}
    onChange={handleFieldChange}/>
</div>

<div>
    Firstname
<input type="text"
placeholder="First name"
name="firstName"
value={user.firstName}
onChange={handleFieldChange}></input>
</div>

<div>
    Lastname
    <input type="text"
    placeholder="Last name"
    name="lastName"
    value={user.lastName}
    onChange={handleFieldChange}></input>
</div>

<div>
    Email
    <input type="text"
    placeholder="Email"
    name="email"
    value={user.email}
    onChange={handleFieldChange}></input>
</div>

<button type="submit">Add User</button>
</form>


</div>


 )



}