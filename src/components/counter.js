import React, { useReducer } from 'react';

const initialState = {
    count: 2
}

const reducer = (state, action) => {

    switch(action){
        case 'INCREMENT':
            return {count: state.count + action.payload}
        case 'DECREMENT':
            return {count: state.count - action.payload}
        default:
            return state
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="">
            <h1>Counter</h1>
            <h2>カウント: { state.count }</h2>
            <button onClick={() => dispatch({type: 'INCREMENT', payload: 5})}>+</button>
            <button onClick={() => dispatch({type: 'DECREMENT', payload: 5})}>-</button>
            
        </div>
  );
}

export default Counter;