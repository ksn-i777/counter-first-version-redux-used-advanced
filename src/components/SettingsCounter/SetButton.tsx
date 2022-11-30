import React from 'react';
import s from './SetButton.module.css';
import { Button } from '../Button';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './../../redux/store'
import { notMessageAC } from './../../redux/infoMessage-reducer'
import { resCounterAC} from './../../redux/counter-reducer'

export function SetButton() {

    const dispatch = useDispatch()
    const minValue = useSelector<RootState, number>(s => s.minInput)
    const message = useSelector<RootState, string>(s => s.infoMessage)
    const error = useSelector<RootState, string>(s => s.error)

    function setStartValue() {
        if (!error) {
            dispatch(notMessageAC())
            dispatch(resCounterAC(minValue))
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