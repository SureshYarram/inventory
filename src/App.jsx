import logo from './logo.svg';
import './App.css';
 
import {Counterbooks,CounterPens,Counternotebooks,CounterInkpens,Total} from "./components/Counter.jsx";
function App() {
  return (
     <div id="container">
      < Counterbooks/>
      < CounterPens/>
      < Counternotebooks/>
      < CounterInkpens/>
      < Total/>
   </div>
  )
}

export default App;
