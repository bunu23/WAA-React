import React from "react";

const Counter=({numberOfClicks,onIncrement})=>{

let CounterElement=(
<>

<h3>you have clicked the button {numberOfClicks} times </h3>
<button onClick={onIncrement}>Click me ! </button>
</>

);

return CounterElement;



}
export default Counter;