import React from 'react';
import s from './Display.module.css';
import { useSelector } from 'react-redux';
import { AppStateType } from './../../redux/store';

export function Display() {

    const maxValue = useSelector<AppStateType, number>(s => s.maxInput)
    const count = useSelector<AppStateType, number>(s => s.counter)
    const message = useSelector<AppStateType, string>(s => s.infoMessage)
    const error = useSelector<AppStateType, string>(s => s.error)

    return (
        <div className={
            error ? s.info + ' ' + s.error :
            message ? s.info + ' ' + s.message :
            count === maxValue ? s.info + ' ' + s.numberMax :
            s.info}>
            {
            error ? error :
            message ? message :
            count === maxValue ? count + ' max' : count
            }
        </div>
    )
}
