import React,{useState} from "react";
import {useLocation,useNavigate} from "react-router-dom";

export const Page3=()=>{
const location=useLocation();
const navigate=useNavigate();
const [creditCardNumber,setCreditCardNumber]=useState("");
const userName=location.state.userName;
const address=location.state.address;

let handleOnSubmit=()=>{
    navigate("/pageFour",{state:{userName:userName,address:address,creditCardNumber:creditCardNumber}});
}


let pagethree=(
    
    <div> 
 <div>
UserName: {userName} 
<br></br>
Address : {address}
    </div>
<form>
<h3>page three</h3>
<div>creditCardNumber
<input type="text" value={creditCardNumber}
onChange={e=>setCreditCardNumber(e.target.value)}></input>
</div>
<button onClick={handleOnSubmit}>Next</button>
</form>
</div>
)
return pagethree;


}