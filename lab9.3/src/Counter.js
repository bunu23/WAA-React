import React from "react";
const Counter=({setCount, count, value})=>{
const increment=()=>setCount(count+value);
const decrement=()=>setCount(count-value);
let content=(
    <div>
    <h2>{count}</h2>
    <button onClick={increment}>+{value}</button>
    <button onClick={decrement}>-{value}</button>
    </div>
)
return content;
}

export default Counter;

//part1
// import React,{useState} from "react";


// function Counter({initialValue, incrementAmount, decrementAmount}){
//     const[count,setCount]=useState(initialValue);
//     const handleIncrement=()=>{
//         setCount(count+incrementAmount);
//     }
//     const handleDecrement=()=>{
//         setCount(count-decrementAmount)
//     }
//     return(
//         <div>
// <p>{count}</p>
// <button onClick={handleIncrement}>+{incrementAmount}</button>
// <button onClick={handleDecrement}>-{decrementAmount}</button>
//         </div>
//     )
// }


// export default Counter;