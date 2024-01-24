import {useSelector,useDispatch} from "react-redux";

const Counter=()=>{
const dispatch=useDispatch();
const counter=useSelector(state=>state.counter)

const incrementHandler=()=>{
dispatch({type:"increment"});
}

const decrementHandler=()=>{
    dispatch({type:"decrement"});
}

const increaseHandler=()=>{
    dispatch({type:"increase", amount:5})
}

const decreaseHandler=()=>{
    dispatch({type:"decrease",amount:3})
}

return(

    <div>
        <h2>Redux counter</h2>

        <div>{counter}</div>
        <div>
            <button onClick={incrementHandler}>+1</button>
            <button onClick={decrementHandler}>-1</button>
            <button onClick={increaseHandler}> +5 </button>
            <button onClick={decreaseHandler}>-3</button>
        </div>
    </div>
)

}

export default Counter;