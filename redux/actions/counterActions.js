// action creator file
import { INCREASE, DECREASE, RESET } from "./actionTypes.js";


// actions 

//  {
//     type: INCREASE
//  }

// action creator are functions that return action objects

export function increase() {
    return {
        type: INCREASE,
    }
}

export function decrease() {
    return {type: DECREASE}
}

export function reset() {
    return {type: RESET}
}