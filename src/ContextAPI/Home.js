import React from 'react';
import { useUserContext } from './UserContext';
export function Home(){
    const {user} = useUserContext();
    return(
    <>
    <h1>You are now logged in as {user.name}</h1>
    </>
    )
}