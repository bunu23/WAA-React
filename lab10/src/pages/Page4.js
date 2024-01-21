import React from "react";
import {useLocation} from "react-router-dom";

export const Page4=()=>{
    const location=useLocation();
const firstName=location.state.firstName;
const lastName=location.state.lastName;
const profession=location.state.profession;
const street=location.state.street;
const city=location.state.city;
const zip=location.state.zip;
const state=location.state.state;
const creditCard=location.state.creditCard;
const type=location.state.type;


let pageFour=(
<div>
<h3> Customer Details : </h3>
<div>FirstName : {firstName}</div>
<div>LastName : {lastName}</div>
<div>Profession: {profession}</div>
<div>Street: {street}</div>
<div>City: {city}</div>
<div>Zip: {zip}</div>
<div>State: {state}</div>
<div>creditCard: {creditCard}</div>
<div>Type: {type}</div>
</div>
)
return pageFour;


}