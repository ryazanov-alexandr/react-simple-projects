import { useState } from 'react';
import './index.scss'

function App() {
  const [counter, setCounter] = useState(0);

  const incerment = () => { 
    setCounter(counter + 1)
  }

  const decerment = () => { 
    setCounter(counter - 1)
  }

  return (
    <div className="App">
      <div>
        <h1>Счетчик</h1>
        <h2>{counter}</h2>
        <button onClick={decerment} className="minus">- Минус</button>
        <button onClick={incerment} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
