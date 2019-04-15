import { createStore } from 'redux';

// Action generators - functions that return action objects


const incrementCount = ( { incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ( { decrementBy = 1 }  = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const setCount = ( { setBy } = {}) => ({
    type: 'SET',
    setBy
});

const resetCount = ( ) => ({
    type: 'RESET',
});

// Reducers
// 1.  Reducers are pure functions
// 2. Never change state or action

let a = 10;
const add = (b) => {
  return a + b;  
};

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':   
          return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
            return {
            count: state.count - action.decrementBy
            }
        case 'SET': 
            return {
            count: action.setBy
            }
        case 'RESET': 
            return {
            count: 0
            }
        default:
          return state;
    }
};

const store = createStore(countReducer); 

const unsubscribe = store.subscribe(() => {
   console.log(store.getState()); 
});

// Actions - an object that gets send to the store

// increment the count
store.dispatch(incrementCount({ incrementBy: 7 }))

// reset count
store.dispatch(resetCount())

// decrement the count
store.dispatch(decrementCount({ decrementBy: 1 }))

// set count
store.dispatch(setCount({ setBy: 20 }))



