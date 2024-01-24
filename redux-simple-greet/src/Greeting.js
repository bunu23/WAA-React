import {useSelector,useDispatch} from "react-redux";
import {useState} from "react";


const Greeting=()=>{
const dispatch=useDispatch();
const[name,setName]=useState("");
const greetingMessage=useSelector(state=>state.greeting);
const greetingHandler=()=>{
    dispatch({type:"getgreeting",name:name});
}
return(
    <div>
        <h1>Greeting</h1>
        <div>{greetingMessage}</div>

        <div>Name
            <input type="text"
            placeholder="your name"
            name="name"
            value={name}
            onChange={e=>setName(e.target.value)}></input>
        </div>
        <button onClick={greetingHandler}>Show Greeting</button>
    </div>
)
}


export default Greeting;