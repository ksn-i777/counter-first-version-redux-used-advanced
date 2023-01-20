import React from 'react'
import s from './SetButton.module.css'
import { Button } from '../Button'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatchType, AppStateType } from './../../redux/store'
import { notMessageAC } from './../../redux/infoMessage-reducer'
import { resCounterTC } from './../../redux/counter-reducer'

export function SetButton() {

    const dispatch = useDispatch<AppDispatchType>()
    const minValue = useSelector<AppStateType, number>(s => s.minInput)
    const message = useSelector<AppStateType, string>(s => s.infoMessage)
    const error = useSelector<AppStateType, string>(s => s.error)

    function setStartValue() {
        if (!error) {
            dispatch(notMessageAC())
            dispatch(resCounterTC(minValue))
        }
    }

    return (
        <div className={s.setButton}>
            <Button
                name={'set'}
                className={s.button}
                callback={setStartValue}
                disabled={!message || error ? true : false}
            />
        </div>
    );
}