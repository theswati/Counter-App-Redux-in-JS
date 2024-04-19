import { createStore } from "redux"; // older
import counterReducer from "./reducer/counterReducer.js";


const store  = createStore(counterReducer)
// 

export default store


// counterReducer() by store => 0 => stored by the store

// dispatch({type: "INCREASE"})

// counterReducer(0, {type: "INCREASE"} ) => 1 => stored by the store

// dispatch({type: "INCREASE"})
// counterReducer(1, {type: "INCREASE"} ) => 2 => stored by the store


// dispatch({type: "INCREASE", value: 100})
// counterReducer(2, {type: "INCREASE", value: 100}) => 102


// dispatch({type: "INCREASE", value: 100}) 


store => counterReducer(2, {type: "INCREASE", value: 100})=> 102 