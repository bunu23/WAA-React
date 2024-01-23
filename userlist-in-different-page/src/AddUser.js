import React,{useState} from "react";
import {  useNavigate } from "react-router-dom";


export const AddUser=({addUserFunction})=>{
  
const navigate=useNavigate();
const cleanUser={userid:"",firstName:"",lastName:"",email:""};
const[user,setUser]=useState(cleanUser);

const handleSubmit=(e)=>{
    e.preventDefault();
    addUserFunction(user);
    navigate("/");
}

const handleFileChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
}

return(
<div>
<h2>Add a new user</h2>
<form onSubmit={handleSubmit}>
<div>
    Userid
<input type="text" placeholder="userid" name="userid" value={user.userid} onChange={handleFileChange}></input>
</div>

<div>
    FirstName
<input type="text" name="firstName" value={user.firstName} onChange={handleFileChange}></input>
</div>

<div>
    LastName
<input type="text" name="lastName" value={user.lastName} onChange={handleFileChange}></input>
</div>

<div>
    Email
    <input type="text" name="email" value={user.email} onChange={handleFileChange}></input>
</div>

<button type="submit"> Submit</button>

</form>



</div>


)





} 