import { ClearAll } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {clearCart} from '../../actions'


function Cart(props) {
    const [home, setHome] = useState(false)
    const cart = useSelector(state=>state.cart)
    const dispatch = useDispatch()
    const clearAll = ()=>{
        dispatch(clearCart())
    }

    return (
        <div>
            {home && <Redirect to="/"/>}
            <h1>Cart</h1>
            <h1>Total {cart.length && cart.reduce((acc,item)=>acc+item.price, 0)}</h1>
            <button onClick={()=>{clearAll() 
                setHome(true)}}>Place Order</button>
        </div>
    )
}

export default Cart
