import React,{ useState }from 'react';
import { Funct2Components } from './Funct2Components';
import { ChildComponents } from './ChildComponents';
import { CounterContext } from './CounterContext';
export function FunctionComponents(){
const [counter,setCounter] = useState(0);
    return(
        <>
       <h1>FunctionComponent</h1>
        <h5>{counter}</h5>
        <button class = "btn btn-primary" onClick = {()=>{setCounter(counter+1)}}>Increment</button>
        <button class = "btn btn-primary" onClick = {()=>{setCounter(counter-1)}}>Decrement</button>
        <CounterContext.Provider value ={counter}>
        <Funct2Components />
        <ChildComponents />
        </CounterContext.Provider>
        </>
    )
}