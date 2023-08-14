import React from 'react';
import { useUserContext } from '../ContextAPI/UserContext';
export function Header(){
const {user,logOut} = useUserContext();
console.log(user)
    return(
        <>
        <h1>Welcome,{user.name} {!user.isGuestUser && (<button onClick = {logOut} class = "btn btn-primary">Logout</button>)}
</h1>
       
        </>
    )
}