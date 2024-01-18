import React from "react";

const TopComponent=({sayHelloFunction, sayGoodByeFunction})=>{

let content=
<table>
    <tr>
        <th>
            <button onClick={sayHelloFunction}>Say Hello! </button>
        </th>
        <th>
            <button onClick={sayGoodByeFunction}>Say GoodBye! </button>
        </th>
    </tr>
</table>
return content;
}

export default TopComponent;