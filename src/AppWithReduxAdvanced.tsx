import React from 'react';
import './App.css';
import { SettingsCounter } from './components/SettingsCounter/SettingsCounter';
import { Counter } from './components/Counter/Counter';

function App() {

    return (
        <div className="App">
            <div className='wrapper'>
                <SettingsCounter/>
                <Counter/>
            </div>
        </div>
    );
}

export default App