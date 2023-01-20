import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { MinInputActionsType, minInputReducer } from './minInput-reducer'
import { MaxInputActionsType, maxInputReducer } from './maxInput-reducer'
import { CounterActionsType, counterReducer } from './counter-reducer'
import { errorReducer, InputsErrorActionsType } from './error-reducer'
import { MessageActionsType, messageReducer } from './infoMessage-reducer'
import thunkMiddlewear, { ThunkDispatch } from 'redux-thunk'

const rootReducer = combineReducers({
    minInput: minInputReducer,
    maxInput: maxInputReducer,
    counter: counterReducer,
    error: errorReducer,
    infoMessage: messageReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddlewear))

export type AppStateType = ReturnType<typeof rootReducer>

export type AppActionsType = CounterActionsType | InputsErrorActionsType | MessageActionsType | MaxInputActionsType | MinInputActionsType

export type AppDispatchType = ThunkDispatch<AppStateType, unknown, AppActionsType>