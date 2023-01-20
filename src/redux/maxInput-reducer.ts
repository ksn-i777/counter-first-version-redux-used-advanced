import { AppDispatchType, AppStateType } from "./store"

const CHANGE_MAX_INPUT = 'CHANGE-MAX-INPUT'

export type MaxInputActionsType = ReturnType<typeof maxInputAC>

export function maxInputReducer(state:number = 5, action:MaxInputActionsType):number {
    switch (action.type) {
        case CHANGE_MAX_INPUT:
            return action.value
        default:
            return state
    }
}

//AC
export function maxInputAC(value:number) {
    return ({type: CHANGE_MAX_INPUT, value: value})
}

//TC
export const setMaxInputValueTC = (value:number) => (dispatch: AppDispatchType, getState: () => AppStateType) => {
    dispatch(maxInputAC(value))
    localStorage.setItem('max value', JSON.stringify(getState().maxInput))
}
export const getMaxInputValueTC = () => (dispatch: AppDispatchType) => {
    const getLS = localStorage.getItem('max value')
    if (getLS) {
        dispatch(maxInputAC(JSON.parse(getLS)))
    }
}