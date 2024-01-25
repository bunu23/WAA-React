import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";

const Calculator=()=>{

const dispatch=useDispatch();
const value=useSelector(state=>state.calcValue)
const[amount,setAmount]=useState(0);

const add=()=>{
    dispatch({type:"add",amount:amount})
}
const multiply=()=>{
    dispatch({type:"multiply",amount:amount})
}

const substract=()=>{
    dispatch({type:"substract",amount:amount})
}

return(
<div>
<h1>Calculator</h1>
<h5>Result : {value}</h5>
<div>
    Amount
<input type="text"
placeholder="amount"
name="amount"
value={amount}
onChange={e=>setAmount(e.target.value)}></input>
</div>
<button onClick={add}>+</button>
<button onClick={substract}>-</button>
<button onClick={multiply}>*</button>
</div>


)


}


export default Calculator;