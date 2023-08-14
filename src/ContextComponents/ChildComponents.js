import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';
export function ChildComponents(){
    const counter = useContext(CounterContext)
    return(
        <>

        <h1>ChildComponents</h1>
        <h2>{counter}</h2>
        </>
    )
}