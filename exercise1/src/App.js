
import './App.css';
import { HelloComponentClass } from './HelloComponentClass';
import { HelloComponentFunction } from './HelloComponentFunction';
import HelloComponentSimpleFunction from './HelloComponentSimpleFunction';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloComponentClass/>
        <HelloComponentSimpleFunction/>
        <HelloComponentFunction/>
      </header>
    </div>
  );
}

export default App;
