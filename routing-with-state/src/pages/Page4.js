import React from "react";
import {useLocation} from "react-router-dom";

export const Page4=(props)=>{
const location=useLocation();
const userName=location.state.userName;
const address=location.state.address;
const creditCardNumber=location.state.creditCardNumber;

let pagefour=(

    <div>

<h3>Thank you for your order! </h3>
<div> UserName : {userName}</div>
 <div> Address : {address}</div> 
  <div> Creditcard : {creditCardNumber} </div>
  
    </div>

)
return pagefour;


}