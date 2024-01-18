import React from "react";


const BottomComponent=({message})=>{

    let content=<div>
        <p>
            {message}
        </p>
    </div>
    return content;
}

export default BottomComponent;