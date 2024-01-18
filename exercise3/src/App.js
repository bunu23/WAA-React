
import './App.css';
import ButtomComponent from './ButtomComponent';
// import Greeting from './Greeting';
// import Greeting2 from "./Greeting2";
// import Greeting3 from './Greeting3';
// import Greeting4 from './Greeting4';
import TopComponent from './TopComponent';

function App() {


  const sayHello=()=>{
    console.log("Hello was clicked");
  }
  const sayGoodbye=()=>{
    console.log("GoodBye was clicked");
  }
  return (

    <div>
      <TopComponent sayHelloFunction={sayHello} sayGoodByeFunction={sayGoodbye}/>
      <ButtomComponent/>
    </div>
   
    // <div className='App'>
    //   <header className='App-header'>
    //   {/* <Greeting name="Frank" nrOfMessages={5}/> */}
    //   {/* <Greeting2 name="Frank" nrOfMessages={5}/> */}
    //   {/* <Greeting3 name="Frank" nrOfMessages={5}></Greeting3> */}
    //   {/* <Greeting4 person={{firstName:"Frank",lastName:"Brown"}} nrOfMessages={5}/> */}
    //   </header>
    // </div>

  );
}

export default App;
