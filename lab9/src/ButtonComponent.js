import React from "react";


const ButtonComponent=({buttonText,clickMessage})=>{

const showAlert=()=>
{
    alert(clickMessage);
}

let content=<table>
    <th>
        <button onClick={showAlert}> {buttonText} </button>
    </th>
</table>

return content;


}
export default ButtonComponent;