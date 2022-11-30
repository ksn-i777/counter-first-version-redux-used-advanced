import React from 'react';
import s from './IncResetButtons.module.css';
import { Button } from '../Button';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './../../redux/store';
import { incCounterAC, resCounterAC } from './../../redux/counter-reducer'

export function IncResetButtons() {

    const dispatch = useDispatch()
    const minValue = useSelector<RootState, number>(s => s.minInput)
    const maxValue = useSelector<RootState, number>(s => s.maxInput)
    const count = useSelector<RootState, number>(s => s.counter)
    const message = useSelector<RootState, string>(s => s.infoMessage)

    return (
        <div className={s.incResetButtons}>
            <Button
                name={'inc'}
                className={s.button}
                callback={() => dispatch(incCounterAC())}
                disabled={message || count === maxValue ? true : false}
            />
            <Button
                name={'reset'}
                className={s.button}
                callback={() => dispatch(resCounterAC(minValue))}
                disabled={message || count === minValue ? true : false}
            />
        </div>
    );
}