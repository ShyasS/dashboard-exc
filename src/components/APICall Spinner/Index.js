import React from 'react';
import { useEffect,useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
export function Index(){
    const [post,setPost] = useState(null);
useEffect(()=>{
   fetch("https://fakestoreapi.com/products/1")
   .then(response=>response.json())
   .then(response=>{
    const {description} = response
    console.log(description)
    setPost(description)
   })


},[])

    return(
        <div class = "m-5">
           {post? post: <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>}
        </div>
    )
}