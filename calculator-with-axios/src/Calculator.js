import React,{useState} from "react";
import axios from "axios";

export const Calculator=()=>{
const[firstNumber,setFirstNumber]=useState(0);
const[secondNumber,setSecondNumber]=useState(0);
const[operator,setOperator]=useState("add");
const[result,setResult]=useState(0);

// const fetchBackend=e=>{
//     const url="http://localhost:8080/cal/"+firstNumber+"/"+second+"/"+operator;
//     const response=fetch(url)
//     .then((response)=>response.json())
//     .then((data)=>{
//         setResult(data.value);
//     });
//     e.preventDefault();
// }

const fetchBackend=e=>{
    const url="http://localhost:8080/cal/"+firstNumber+"/"+secondNumber+"/"+operator;
    const response=axios.get(url).then((response)=>{
        setResult(response.data.value);
    })
    e.preventDefault();
}

let calc=(

    <div>
        <h3>Calculator</h3>
        <form>

<table class="center">
<tr>
    <td>Fist number</td>
    <td>
        <input type="text"
        name="firstNumber"
        value={firstNumber}
        onChange={e=>setFirstNumber(e.target.value)}></input>
    </td>
</tr>


<tr>
    <td>Second number</td>
    <td>
        <input type="text"
        name="secondNumber"
        value={secondNumber}
        onChange={e=>setSecondNumber(e.target.value)}/>
    </td>
</tr>

<tr>
    <td>Operator</td>
    <td>
    <select
    type="text"
    name="operator"
    value={operator}
    onChange={e=>setOperator(e.target.value)}>
<option>add</option>
<option>substract</option>
<option>multiply</option>
<option>divide</option>
    </select>
    </td>
</tr>
<tr>
<td></td>
<td><button onClick={fetchBackend}>Submit</button></td>
</tr>

<tr>
    <td>Result</td>
    <td>{result}</td>
</tr>
</table>

        </form>
    </div>
)
return calc;



}