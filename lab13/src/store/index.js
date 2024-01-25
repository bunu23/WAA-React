import {createStore} from "redux";

const initialState={calcValue:0,tasks:[]};

const calcReducer=(state=initialState,action)=>{

    if(action.type==="add"){
        return{
            calcValue:state.calcValue+parseInt(action.amount),
            tasks:state.tasks
        }
    }

    if(action.type==="substract"){
        return {calcValue:state.calcValue-parseInt(action.amount)
        ,tasks:state.tasks}
    }

    if(action.type==="multiply"){
        return{calcValue:state.calcValue*parseInt(action.amount)
        ,tasks:state.tasks}
        
    }

    if(action.type==="addTask"){
        return{
            calcValue:state.calcValue,
            tasks:state.tasks.concat(action.task)
        }
    }
return state;

}

const store=createStore(calcReducer)

export default store;