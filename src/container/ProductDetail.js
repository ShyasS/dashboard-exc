import React,{useEffect}from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { RotatingLines } from  'react-loader-spinner'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchProduct,removeselectedProduct } from '../redux/Actions/ProductActions';
export function ProductDetail(){
    const {id} = useParams();
    const product = useSelector((state)=>state.product);
    const {image,title,price,description} = product;
    console.log(id)
    const dispatch = useDispatch();
useEffect(()=>{
    dispatch(fetchProduct(id));
    
    return () => {
        dispatch(removeselectedProduct())
    }
},[])

    return(
        <>
        {Object.keys(product).length === 0 ? (
            <div style = {{marginTop:180, marginLeft:"700px"}}><RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="150"
            height = "200"
            visible={true}
          /></div>)
            :
            (
        <div class="card">
  <div class="card-header">
<img src = {image} style = {{marginLeft:"500px", height:"550px", width:"500px"}}alt = {title}/>
  </div>
  <div class="card-body">
    <h3 class="card-title"  style = {{textAlign:"center"}}>{title}</h3>
    <h3 class="card-title"  style = {{textAlign:"center"}}>${price}</h3>
    <p class="card-text" style = {{textAlign:"center"}}>{description}</p>

  </div>
</div>
        )
}
        </>
    )
}