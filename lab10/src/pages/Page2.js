import React,{useState} from "react";
import {useLocation,useNavigate} from "react-router-dom";

export const Page2=()=>{

const location=useLocation();
const navigate=useNavigate();
const[street,setStreet]=useState("");
const[city,setCity]=useState("");
const[zip,setZip]=useState("");
const[state,setState]=useState("");
const firstName=location.state.firstName;
const lastName=location.state.lastName;
const profession=location.state.profession;

let handleOnSubmit=()=>{
    navigate("/pageThree",{state:{firstName:firstName,lastName:lastName,profession:profession,street:street,city:city,zip:zip,state:state}})
}

let pageTwo=(
<div>
    <div>FirstName : {firstName}</div>
    <div>LastName : {lastName}</div>
    <div>Profession: {profession}</div>

<form>

<div> Street 
<input type="text" value={street} onChange={e=>setStreet(e.target.value)}></input>
</div>

<div>
City
<input type="text" value={city} onChange={e=>setCity(e.target.value)}></input>
</div>

<div>
    Zip
<input type="text" value={zip} onChange={e=>setZip(e.target.value)}></input>
</div>

<div>
State
<select type="text" value={state} onChange={e=>setState(e.target.value)}>
 <option>
        Iowa
    </option>
<option>
    California
</option>
</select>
</div>

<button onClick={handleOnSubmit}>Next</button>

</form>

</div>

)
return pageTwo;
}