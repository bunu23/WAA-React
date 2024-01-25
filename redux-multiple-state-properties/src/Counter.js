import {useSelector,useDispatch} from "react-redux";

const Counter=()=>{

    const dispatch=useDispatch();
    const counter=useSelector(state=>state.counter);
    // const greeting=useSelector(state=>state.greeting);

    const incrementHandler=()=>{

        dispatch({type:"increment"})
    }

    const decrementHandler=()=>{
        dispatch({type:"decrement"})
    }

    return(

        <div>
            <h2>Counter</h2>
            {/* <div>Hello {greeting}</div> */}
            <div>{counter}</div>
            <button onClick={incrementHandler} >Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
    )
}

export default Counter;