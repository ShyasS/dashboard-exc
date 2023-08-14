import React,{useEffect} from 'react';
import { useSelector } from 'react-redux';
import {ProductComponent} from '../container/ProductComponent';
import {fetchProducts} from '../redux/Actions/ProductActions';
import { useDispatch } from 'react-redux';
export function ProductListing(){
    const products = useSelector((state) =>state);
    const dispatch = useDispatch();
    useEffect(()=>{
   dispatch(fetchProducts());
    },[])

    return(
        <>
<ProductComponent/>
        </>
    )
}