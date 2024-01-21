
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Page1,Page2,Page3,Page4} from "./pages";
import './App.css';

function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Page1 />} />
    <Route path="/pageTwo" element={<Page2 />} /> 
    <Route path="/pageThree" element={<Page3 />} /> 
    <Route path="/pageFour" element={<Page4 />} />

    </Routes>
    </BrowserRouter>



    </div>
  );
}

export default App;
