import React,{useContext} from 'react';
import { CounterContext } from './CounterContext';
export function Funct2Components(){
    const counter = useContext(CounterContext);
    return(
        <>
        <h1>Funct2Component</h1>
        <h2>{counter}</h2>
        </>
    )
}