import React from 'react'
import s from './Inputs.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatchType, AppStateType } from './../../redux/store'
import { setMinInputValueTC } from './../../redux/minInput-reducer'
import { setMaxInputValueTC } from './../../redux/maxInput-reducer'
import { errorMinInputAC, errorMaxInputAC } from './../../redux/error-reducer'
import { messageAC } from './../../redux/infoMessage-reducer'

export function Inputs() {

    const dispatch = useDispatch<AppDispatchType>()
    const minValue = useSelector<AppStateType, number>(s => s.minInput)
    const maxValue = useSelector<AppStateType, number>(s => s.maxInput)
    const error = useSelector<AppStateType, string>(s => s.error)

    function onChangeMinInput(value: number) {
        dispatch(messageAC())
        dispatch(errorMinInputAC(value, minValue, maxValue))
        dispatch(setMinInputValueTC(value))
    }

    function onChangeMaxInput(value: number) {
        dispatch(messageAC())
        dispatch(errorMaxInputAC(value, minValue, maxValue))
        dispatch(setMaxInputValueTC(value))
    }

    return (
        <div className={s.inputs}>
            <div className={s.inputItem}>
                <span className={s.inputText}>start value:</span>
                <input
                    type="number"
                    value={minValue}
                    className={error ? s.inputError : s.input}
                    onChange={(e) => onChangeMinInput(+e.currentTarget.value)}
                />
            </div>
            <div className={s.inputItem}>
                <span className={s.inputText}>max value:</span>
                <input
                    type="number"
                    value={maxValue}
                    className={error ? s.inputError : s.input}
                    onChange={(e) => onChangeMaxInput(+e.currentTarget.value)}
                />
            </div>
        </div>
    );
}

