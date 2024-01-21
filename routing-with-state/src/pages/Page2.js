import React,{useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

export const Page2=()=>{
const location=useLocation();
const[address,setAddress]=useState("");
const navigate=useNavigate();
const userName=location.state.userName;

let gotoNextPage=()=>{
navigate("/pageThree",{state:{userName:userName,address:address}})
}

let gotoPriorPage=()=>{
navigate("/")
}



    let page2=(
        <div> 
            <div> UserName : {userName}</div>
<form>

<h3>page 2</h3>
<div>
    Address :
    <input type="text" placeholder="Address" value={address}
    onChange={e=>setAddress(e.target.value)}></input>
</div>
<button onClick={gotoPriorPage}> Previous </button>
<button onClick={gotoNextPage}>Next</button>
</form>
</div>

    )
    return page2;

}