import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Page1, Page2, Page3, Page4 } from "./pages";
import './App.css';

function App() {
  return (
    <div>

<BrowserRouter>
<Routes>

<Route path="/" element={<Page1></Page1>}></Route>
<Route path="/pageTwo" element={<Page2></Page2>}></Route>
<Route path="/pageThree" element={<Page3></Page3>}></Route>
<Route path="/pageFour" element={<Page4></Page4>}></Route>


</Routes>

</BrowserRouter>

    
    </div>
  );
}

export default App;
