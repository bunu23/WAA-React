import React from "react";
import {useNavigate} from "react-router-dom";

export const Page1=()=>{
const navigate =useNavigate();

const gotoNextPage=()=>{
    navigate("/pageTwo");
}

let pageOne=(
<>
<h3>Page 1</h3>
<br/>
<br/>
<button onClick={gotoNextPage}>Next</button>
</>
)
return pageOne;
}


