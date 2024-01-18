
import './App.css';
import ButtonComponent from "./ButtonComponent"
function App() {
  return (
   
 <div>
  <header>
    <p>
     <ButtonComponent buttonText="say hello from button 1" clickMessage="hello from button 1"/>
     <ButtonComponent buttonText="say hello from button 2" clickMessage="hello from button 2"/>
     <ButtonComponent buttonText="say hello from button 3" clickMessage="hello from button 3"/>
     <ButtonComponent buttonText="say hello from button 4" clickMessage="hello from button 4"/>

    </p>
  </header>
 </div>
  );
}

export default App;
