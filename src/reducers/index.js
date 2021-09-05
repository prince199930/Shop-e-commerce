import * as actionTypes  from '../actionypes'

const initialState = {
    product : [],
    cart : []

}

const myReducer = (state = initialState, {type, payload}) => {
    switch (type) {

    case actionTypes.ADD_PRODUCT:
        return { ...state, cart:[...state.cart, payload] }
        break;

    case actionTypes.GET_PRODUCT:
        return { ...state, product: payload }
        break;

    case actionTypes.CLEAR_CART:
        return {...state, cart:[]}
        break;
    default:
        return state
    }
}

export default myReducer