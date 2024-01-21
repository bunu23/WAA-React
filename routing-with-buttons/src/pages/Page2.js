import React from "react";
import { useNavigate } from "react-router-dom";

export const Page2=()=>{

    const navigate=useNavigate();
    const gotoNextPage=()=>{
        navigate("/pagethree")
    }
    const gotoPrevios=()=>{
        navigate("/")
    }

let pageTwo=(
<>
    <h2>Page Two</h2>
    <button onClick={gotoPrevios}>previous</button>
    <button onClick={gotoNextPage}>Next</button>

    </>
)
return pageTwo;
}