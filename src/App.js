import './App.css';
import { useSelector, useDispatch } from "react-redux"
import { incNumber, decNumber} from './actions/index'

function App() {

  const myState = useSelector((state)=> state.changeTheNumber)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="container mt-5">
          <h1>Increment and Decrement Counter</h1>
          <h4>Useing React and Redux</h4>
          
          <div className="quantity">
            <a className="quantity__minus" title="Decrement" onClick={()=> dispatch(decNumber())}><span> - </span></a>
              <input name="quantity" type="text" className="quantity__input" value={myState}></input>
            <a className="quantity__plus" title="Increment" onClick={()=> dispatch(incNumber()) }><span> + </span></a>
          </div>
      </div>
    </div>
  );
}

export default App;
