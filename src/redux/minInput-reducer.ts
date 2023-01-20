import { AppDispatchType, AppStateType } from "./store"

const CHANGE_MIN_INPUT = 'CHANGE-MIN-INPUT'

export type MinInputActionsType = ReturnType<typeof minInputAC>

export function minInputReducer(state:number = 0, action:MinInputActionsType):number {
    switch (action.type) {
        case CHANGE_MIN_INPUT:
            return action.value
        default:
            return state
    }
}

//AC
export function minInputAC(value:number) {
    return ({type: CHANGE_MIN_INPUT, value} as const)
}

//TC
export const setMinInputValueTC = (value:number) => (dispatch: AppDispatchType, getState: () => AppStateType) => {
    dispatch(minInputAC(value))
    localStorage.setItem('min value', JSON.stringify(getState().minInput))
}
export const getMinInputValueTC = () => (dispatch: AppDispatchType) => {
    const getLS = localStorage.getItem('min value')
    if (getLS) {
        dispatch(minInputAC(JSON.parse(getLS)))
    }
}