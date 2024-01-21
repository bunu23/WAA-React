import React,{useState} from "react";
import {useNavigate} from "react-router-dom";


export const Page1=()=>{
const navigate=useNavigate();
const[userName,setUsername]=useState("");

const gotoNextPage=()=>{
    navigate("/pageTwo",{state:{userName:userName}})
}

let pageone=(
<form>
<h3>page one</h3>
<div>
Name : 
<input type="text" value={userName} placeholder="name" 
onChange={e=>setUsername(e.target.value)}></input>
</div>
<button onClick={gotoNextPage}>Next</button>
</form>
)
return pageone;


}