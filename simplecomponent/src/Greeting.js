import React from "react";

function Greeting(){


    let isMorning=(new Date()).getHours()<12;
    let greetingElement=isMorning?<h3>Good Morning</h3>:<h3>Good Evening</h3>;
return greetingElement;

}
export default Greeting;