import React from 'react';
import s from './SettingsCounter.module.css';
import { Inputs } from './Inputs'
import { SetButton } from './SetButton'

export function SettingsCounter() {

    return (
        <div className={s.settingsCounter}>
            <Inputs/>
            <SetButton/>
        </div>
    );
}
