import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useUserContext } from './UserContext';
export function LoginPage(){
    const {logIn} = useUserContext();
    const[username,setUsername] = useState({
        name : "",
        password : ""
    });
   const HandleChange = (event) => {
       const target = event.target;
       const value = target.value;
       const name = target.name;
       setUsername({
        ...username,
        [name] : value,
       })
   }

    const OnclickFunc = () => {
     logIn(username.name)
        }

    return(
        <>
        <Grid>
             <Paper elevation = {10} sx = {{padding:"20px",height:"60vh", width:"300px", margin:"60px auto" }}>
<h2>Login</h2>
<hr></hr>
<TextField id="standard-basic" label="Username" name = "name" onChange={HandleChange} value = {username.name} placeholder = "Enter username"variant="standard" fullWidth required/>
<br></br>
<br></br>
<TextField id="standard-basic" label="Password" name = "password" onChange={HandleChange} value = {username.password} placeholder = "Enter password" variant="standard" type='password' fullWidth required/>

<Button sx = {{marginTop:"50px"}}  onClick={OnclickFunc}  variant="contained" fullWidth>Submit</Button>

             </Paper>
        </Grid>

        </>
    )
}