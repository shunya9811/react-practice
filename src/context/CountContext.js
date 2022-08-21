import { createContext, useState, useContext } from "react";

const CountContext = createContext();

export function useCountContext() {
    return useContext(CountContext);
}

export function CountProvider({ children }) {
    const [count, setCount] = useState(100);

    const countDown = () => {
        setCount(count - 1);
    }
  
    const value = {
        count,
        setCount,
        countDown,
    };
  
    return (
        <CountContext.Provider value={value}>
            {children}
        </CountContext.Provider>
    );
}