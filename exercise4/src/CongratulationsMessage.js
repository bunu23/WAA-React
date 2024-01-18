import React from "react";

const CongratulationsMessage=({numberOfClicks,threasold})=>{

    let messageElement=numberOfClicks>=threasold?
    <h1>Congratulations! {threasold} number of clicks reached! </h1>:
    null;
    return messageElement;
    
}

export default CongratulationsMessage;