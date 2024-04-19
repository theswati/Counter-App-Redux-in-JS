import store from './redux/store.js'
import { increase, decrease, reset } from './redux/actions/counterActions.js'

// getState() is a method that returns the current state value of the Redux store 
// dispatch() hepls you to perfrom an action

console.log(store.getState()) // 0

store.dispatch(increase()) // happens 

// store.dispatch({type: "INCREASE"}) 
console.log(store.getState())  // 1

store.dispatch(increase()) 
// store.dispatch({type: "INCREASE"})
console.log(store.getState())


store.dispatch(increase()) // 
// store.dispatch({type: "INCREASE"}) 
console.log(store.getState())



store.dispatch(decrease()) // 
console.log(store.getState())


store.dispatch(reset()) // 
console.log(store.getState())



