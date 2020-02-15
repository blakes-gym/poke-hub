import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'

const initialState = {
  test: 'YOYOYOYOYO'
}

export function initializeStore(initial = initialState) {
  return createStore(
    reducers,
    initial,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}

// // ACTIONS
// export const serverRenderClock = isServer => dispatch => {
//   return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
// }

// export const startClock = dispatch => {
//   return setInterval(() => {
//     dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() })
//   }, 1000)
// }

// export const incrementCount = () => {
//   return { type: actionTypes.INCREMENT }
// }

// export const decrementCount = () => {
//   return { type: actionTypes.DECREMENT }
// }

// export const resetCount = () => {
//   return { type: actionTypes.RESET }
// }
