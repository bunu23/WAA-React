import React, {useState} from "react";
import Counter from "./Counter";

function App(){

  const[count,setCount]=useState(14);
return(
<div>
  <h1>{count}</h1>
  <Counter value={1} count={count} setCount={setCount}/>
  <Counter value={5} count={count} setCount={setCount}/>
  <Counter value={9} count={count} setCount={setCount}/>
  <Counter value={3} count={count} setCount={setCount}/>
</div>

)

}

export default App;

//part1
// import './App.css';

// import Counter from "./Counter"

// function App() {

//  return (
//     <div>
// <Counter initialValue={7} incrementAmount={3} decrementAmount={3}/>
// <Counter initialValue={14} incrementAmount={1} decrementAmount={1}/>
// <Counter initialValue={10} incrementAmount={5} decrementAmount={5}/>
// <Counter initialValue={48} incrementAmount={8} decrementAmount={8}/>
//     </div>
//   );
// }
// export default App;
