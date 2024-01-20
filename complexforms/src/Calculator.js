import React,{useState} from "react";

const Calculator=()=>{

const[firstNumber,setFirstNumber]=useState(0);
const[secondNumber,setSecondNumber]=useState(0);
const[operator,setOperator]=useState("");
const[result,setResult]=useState(0);

let calcPage=(
<form>
<h3>Calculator</h3>
<table class="center">
<tr>
    <td>
        First Number
    </td>
    <td>
        <input type="text"
        name="first"
        value={firstNumber}
        onChange={e=>setFirstNumber(e.target.value)}></input>
    </td>
</tr>


<tr>
    <td>Second Number</td>
    <td>
        <input type="text"
        name="second"
        value={secondNumber}
        onChange={e=>setSecondNumber(e.target.value)}/>
    </td>
</tr>



<tr>
<td>
    Operator
</td>
<td>
    <select type="text"
    name="operator"
    value={operator}
    onChange={e=>setOperator(e.target.value)}>
<option>add</option>
<option>substract</option>
<option>multiply</option>
<option>divide</option>
    <option>clear</option>
    </select>
</td>
</tr>


<td>
    <button onClick={e=>
    {
switch(operator){
    case "add":
        setResult(parseInt(firstNumber)+parseInt(secondNumber));
        break;
    case "substract":
        setResult(parseInt(firstNumber)-parseInt(secondNumber))
        break;
    case "multiply":
        setResult(parseInt(firstNumber)-parseInt(secondNumber))
        break;
    case "divide":
        setResult(parseInt(firstNumber)-parseInt(secondNumber))
        break;
    case "clear":
        setResult(0);
        break;
    default:
        setResult(0);
}
e.preventDefault();

 }
        }>
        Submit
    </button>
</td>

<tr>
    <td>Result</td>
<td>{result}</td>
</tr>
</table>
</form>

)
return calcPage;

}



export default Calculator;