import * as actionTypes  from '../actionypes'

export const getProducts = (payload) => ({
    type: actionTypes.GET_PRODUCT,
    payload:payload
})

export const addProducts = (product)=>({
    type:actionTypes.ADD_PRODUCT,
    payload:product
})

export const clearCart = ()=>({
    type:actionTypes.CLEAR_CART,
})