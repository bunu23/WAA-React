import {useSelector,useDispatch} from "react-redux";
import {useState} from "react";


const Greeting=()=>{
const dispatch=useDispatch();
const[name,setName]=useState("");
const greetingMessage=useSelector(state=>state.greeting);
const counter=useSelector(state=>state.counter);

const greetingHandler=()=>{
    dispatch({type:"getgreeting",name:name})
}

return(

    <div>
        <h2>Greeting</h2>
     <div>Current counter is : {counter}</div>
<div>{greetingMessage}</div>
        <div>
            Name:
            <input type="text"
            name="name"
            value={name}
            onChange={e=>setName(e.target.value)}></input>
        </div>
        <button onClick={greetingHandler}>Show</button>
    </div>
)

}

export default Greeting;