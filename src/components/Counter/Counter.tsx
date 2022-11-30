import React from 'react';
import s from './Counter.module.css';
import { Display } from './Display';
import { IncResetButtons } from './IncResetButtons';

export function Counter() {

    return (
        <div className={s.counter}>
            <Display/>
            <IncResetButtons/>
        </div>
    );
}