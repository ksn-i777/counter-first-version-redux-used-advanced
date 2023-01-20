import React from 'react';
import s from './IncResetButtons.module.css';
import { Button } from '../Button';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatchType, AppStateType } from './../../redux/store';
import { incCounterTC, resCounterTC } from './../../redux/counter-reducer'

export function IncResetButtons() {

    const dispatch = useDispatch<AppDispatchType>()
    const minValue = useSelector<AppStateType, number>(s => s.minInput)
    const maxValue = useSelector<AppStateType, number>(s => s.maxInput)
    const count = useSelector<AppStateType, number>(s => s.counter)
    const message = useSelector<AppStateType, string>(s => s.infoMessage)

    return (
        <div className={s.incResetButtons}>
            <Button
                name={'inc'}
                className={s.button}
                callback={() => dispatch(incCounterTC())}
                disabled={message || count === maxValue ? true : false}
            />
            <Button
                name={'reset'}
                className={s.button}
                callback={() => dispatch(resCounterTC(minValue))}
                disabled={message || count === minValue ? true : false}
            />
        </div>
    );
}