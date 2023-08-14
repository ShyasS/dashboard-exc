import React from 'react';
import { useUserContext } from './UserContext';
import {LoginPage} from '../ContextAPI/LoginPage';
import {Home} from '../ContextAPI/Home';
export function Auth(){
    const {user} = useUserContext();
    return(
        <>
        {user.isGuestUser? <LoginPage/> : <Home/> }
        </>
    )
}