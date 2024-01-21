import React,{useState} from "react";
import {useNavigate,useLocation} from "react-router-dom";

export const Page3=()=>{
const navigate=useNavigate();
const location=useLocation();
const[creditCard,setCreditCard]=useState("");
const[type,setType]=useState("");
const firstName=location.state.firstName;
const lastName=location.state.lastName;
const profession=location.state.profession;
const street=location.state.street;
const city=location.state.city;
const zip=location.state.zip;
const state=location.state.state;

let handleOnSubmit=()=>{
    navigate("/pageFour",{state:{creditCard:creditCard,type:type,firstName:firstName,lastName:lastName,profession:profession,street:street,city:city,zip:zip,state:state}})
}

let pageThree=(
<div>
<div>FirstName: {firstName}</div>
<div>LastName: {lastName}</div>
<div>Profession : {profession}</div>
<div>Street: {street}</div>
<div>City: {city}</div>
<div>Zip: {zip}</div>
<div>State: {state}</div>

<form>

<div> creditCard
    <input type="text" value={creditCard} onChange={e=>setCreditCard(e.target.value)}></input>
</div>
<table>
<tr>
    <td>Type</td>
    <td>
    <input type="radio" value="Visa" checked={type==="Visa"} 
    onChange={e=>setType(e.target.value)}></input>  Visa </td>

    <td>
        <input type="radio"
        value="MasterCard"
        checked={type==="MasterCard"}
        onChange={e=>setType(e.target.value)}></input> MasterCard
    </td>
 </tr>

</table>
<button onClick={handleOnSubmit}> Next</button>

</form>




</div>

)
return pageThree;



}