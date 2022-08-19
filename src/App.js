import { createContext } from 'react';
import ComponentA from './components/ComponentA'

export const UserCount = createContext()

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Learn useContext</h1>
      <UserCount.Provider value={100}>
        <ComponentA/>
      </UserCount.Provider>
    </div>
  );
}

export default App;