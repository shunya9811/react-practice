import { useState } from 'react';
import './App.css';
import Count from './components/count.js'

function App() {

  const [display, setDisplay] = useState(true)

  return (
    <div className="App">
      <h1>Learn useEffect</h1>
      <button onClick={()=>setDisplay(!display)}>Toggle</button>
      {display && <Count/>}
    </div>
  );
}

export default App;