import {ActionTypes} from '../ActionCreators/ActionTypes';
import FakeApiStore from '../../components/API/FakeApiStore';

export const fetchProducts = () => async function (dispatch){
   const response = await FakeApiStore.get("/products")
   dispatch({type:ActionTypes.FETCH_PRODUCTS, payload:response.data})
}
export const fetchProduct = (id) => async function (dispatch){
        const response = await FakeApiStore.get(`/products/${id}`)
        dispatch({type:ActionTypes.SELECTED_PRODUCT, payload:response.data})
}
export const selectedProduct = (product) =>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}
export const removeselectedProduct = () =>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}