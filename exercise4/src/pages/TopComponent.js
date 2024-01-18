import React from "react";


const TopComponent=({setMessageFunction})=> {

const sayHello=()=>{
    setMessageFunction("Hello was clciked");
}
const sayGoodBye=()=>{
    setMessageFunction("GoodBye was clicked");
}
let content=
<table>
    <tr>
        <th>
            <button onClick={sayHello}>Say Hello!</button>
        </th>
        <th>
            <button onClick={sayGoodBye}>Say GoodBye!</button>
        </th>
    </tr>
</table>

return content;
}

export default TopComponent;