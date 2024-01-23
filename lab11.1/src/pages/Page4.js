import React,{useState} from "react";


export const Page4=(props)=>{
    const[user,setUser]=useState(props.location.state.user);



let pageFour=(
<div>
<h3> Customer Details : </h3>
<div>FirstName : {user.firstName}</div>
<div>LastName : {user.lastName}</div>
<div>Profession: {user.profession}</div>
<div>Street: {user.street}</div>
<div>City: {user.city}</div>
<div>Zip: {user.zip}</div>
<div>State: {user.state}</div>
<div>creditCard: {user.creditCard}</div>
<div>Type: {user.type}</div>
</div>
)
return pageFour;


}