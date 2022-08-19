import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState({
    firstName: '',
    lastName: '',
  });

  const handleFirstName = (firstName) => {
    setName((prev) => ({ ...prev, firstName }));
  };

  const handleLastName = (lastName) => {
    setName((prev) => ({ ...prev, lastName }));
  };

  useEffect(() => {
    console.log('useEffectが実行されました');
  }, [name]);

  return (
    <div className="App">
      <h1>Learn useEffect</h1>
      <h2>Name:{`${name.firstName} ${name.lastName}`}</h2>
      <div>
        <button onClick={() => handleFirstName('John')}>John</button>
        <button onClick={() => handleLastName('Joe')}>Doe</button>
      </div>
    </div>
  );
}

export default App;