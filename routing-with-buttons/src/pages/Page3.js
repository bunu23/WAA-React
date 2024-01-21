import React from "react";
import {useNavigate} from "react-router-dom";


export const Page3=()=>{


    const navigate=useNavigate();
    const gotoPrevios=()=>{
        navigate("/")
    }
let pageThree=(
    <>
    <h3>
Page Three
</h3>
    
    <button onClick={gotoPrevios}> previous</button>
    </>
)

return pageThree;


}