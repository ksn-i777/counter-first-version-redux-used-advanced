import React, { useEffect } from 'react';
import './App.css';
import { SettingsCounter } from './components/SettingsCounter/SettingsCounter';
import { Counter } from './components/Counter/Counter';
import { getCounterTC } from './redux/counter-reducer';
import { useDispatch } from 'react-redux';
import { AppDispatchType } from './redux/store';
import { getMaxInputValueTC } from './redux/maxInput-reducer';
import { getMinInputValueTC } from './redux/minInput-reducer';

export function AppWithReduxAdvanced() {

    const dispatch = useDispatch<AppDispatchType>()

    useEffect(() => {
        dispatch(getCounterTC())
        dispatch(getMinInputValueTC())
        dispatch(getMaxInputValueTC())
    }, [])

    return (
        <div className="App">
            <div className='wrapper'>
                <SettingsCounter/>
                <Counter/>
            </div>
        </div>
    );
}