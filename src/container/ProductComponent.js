import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ProductComponent.scss';
export function ProductComponent(){
    const products = useSelector((state)=>state.allProducts.products);
    const response = products.map((product)=>{
    const {id,image,title,price,category} = product;
   return(
        <div class="card" id ="Card1" style ={{width:"270px"}}>
          <Link to ={`/product/${id}`} style = {{textDecoration:"none",color:"black"}}>
  <img src={image} style = {{height:"230px",width:"230px",marginLeft:"20px"}} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title" title = {title}>{title}</h5>
    <h5 class = "card-title">${price}</h5>
    <h5 class = "card-title">{category}</h5>
  </div>
  </Link>
</div>
    )
})
return( 
    <div class = "Maindiv">
    {response}
    </div>
)
}