import React from "react";

const Greeting4=({person,nrOfMessages})=>{
let isMorning=(new Date()).getHours()<12;
let greetingElement=isMorning?(

    <>
    <h2>Good Morning {person.firstName} {person.lastName}</h2>
    <h3>You have messages </h3>
    </>
):(
    <>
    <h2>
        Good Evening {person.firstName} {person.lastName}
    </h2>
    <h3>
        You have {nrOfMessages} messages
    </h3>
    </>
);
return greetingElement;


}

export default Greeting4;