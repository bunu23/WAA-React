import React from "react";

export const Greeting=()=>{

let isMorning=(new Date()).getHours()<12;
let greetingElement=isMorning?(

<>
<h3>Good Morning</h3>
<h4>Enjoy your day</h4>
</>
)
:(
    <>
    <h3>Good Evening</h3>
    <h4>Enjoy your day</h4>
    </>
);
return greetingElement;


}