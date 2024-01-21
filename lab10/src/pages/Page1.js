import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

export const Page1=()=>{

   const navigate=useNavigate();
   const[firstName,setFirstName]=useState("");
   const[lastName,setLastName]=useState("");
   const[profession,setProfession]=useState("");


   let goToNextPage=()=>{
    navigate("/pageTwo",{state:{firstName:firstName,lastName:lastName,profession:profession}})
   }
let pageone=(
<form>
<div>
   FirstName 
    <input type="text" placeholder="firstName" value={firstName}
    onChange={e=>setFirstName(e.target.value)}></input>
</div>
<div>
LastName
<input type="text" placeholder="lastName" value={lastName}
onChange={e=>setLastName(e.target.value)}></input>
</div>
<div>
    Profession
<select type="text" value={profession} 
onChange={e=>setProfession(e.target.value)}>
    <option>Programmer</option>
    <option>Manager</option>
    <option>Tester</option>

</select>
</div>
<button onClick={goToNextPage}>Next</button>
</form>

)
return pageone;

}