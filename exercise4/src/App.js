import "./App.js";
import React,{useState} from "react";
import TopComponent from "./pages/TopComponent"
import BottomComponent from "./pages/BottomComponent"

function App(){
  const[message,setMessage]=useState("");
  return(
    <div>
      <TopComponent setMessageFunction={setMessage}/>
      <BottomComponent message={message}/>
    </div>
  )
}
export default App;



// import React,{useState} from "react";
// import Counter from "./Counter";
// import CongratulationsMessage from "./CongratulationsMessage";

// function App(){
//   const[numberOfClicks,setNumberOfClicks]=useState(0);
//   const increment=()=>setNumberOfClicks(numberOfClicks+1);
//   return(

// <div className="App">
//   <header className="App-header">
//     <CongratulationsMessage  threasold={10} numberOfClicks={numberOfClicks}/>
//     <Counter numberOfClicks={numberOfClicks} onIncrement={increment}/>
//   </header>
// </div>

//   )
// }
// export default App;

//-------------------------------------------------------------------------------------


// import './App.css';
// import {useState} from "react";
// function App() {
//   const[age,setAge]=useState(19);
//   const handleClick=()=>setAge(age+1);
//   return (
  
// <div>
//   I am {age} years old

// <buttom onClick={handleClick}>

//   Increase my age!
// </buttom>
// </div>
//   );
// }

// export default App;
