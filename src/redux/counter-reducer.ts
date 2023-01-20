import { AppDispatchType, AppStateType } from "./store"

const INC_COUNTER = 'INC-COUNTER'
const RES_COUNTER = 'RES-COUNTER'

export type IncCounterActionType = ReturnType<typeof incCounterAC>
export type ResCounterActionType = ReturnType<typeof resCounterAC>
export type CounterActionsType = IncCounterActionType | ResCounterActionType

export function counterReducer(state:number = 0, action:CounterActionsType):number {
    switch (action.type) {
        case INC_COUNTER:
            return state + 1
        case RES_COUNTER:
            return action.value
        default:
            return state
    }
}

//AC
export function incCounterAC() {
    return ({type: INC_COUNTER} as const)
}
export function resCounterAC(value:number) {
    return ({type: RES_COUNTER, value} as const)
}

//TC
export const getCounterTC = () => (dispatch: AppDispatchType) => {
    const getLS = localStorage.getItem('counter')
    if (getLS) {
        dispatch(resCounterAC(JSON.parse(getLS)))
    }
}
export const incCounterTC = () => (dispatch: AppDispatchType, getState: () => AppStateType) => {
    dispatch(incCounterAC())
    localStorage.setItem('counter', JSON.stringify(getState().counter))
}
export const resCounterTC = (value:number) => (dispatch: AppDispatchType, getState: () => AppStateType) => {
    dispatch(resCounterAC(value))
    localStorage.setItem('counter', JSON.stringify(getState().counter))
}
