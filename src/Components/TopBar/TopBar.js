import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import './TopBar.css'
import { Link } from 'react-router-dom'

function TopBar(props) {
    // const [item,setItem] = useState("")
    // const searchItem = ()=>{
    //    if (clothing.length && Accessories.length) {console.log(clothing.filter((i)=>i.name==item))
    //     console.log(Accessories.filter((i)=>i.name==item))}
    // }

    // useEffect(() => {
    //     searchItem()
    // }, [item])
    const cart = useSelector(state=>state.cart)
    return (
    <>
        <div className="navbar">
            <div className="about">
                <Link to='/'>
                <p>SHOP<b>LANE</b></p>
                </Link>
                <p style={{marginLeft:"117px"}}>CLOTHING</p>
                <p style={{marginLeft:"105px"}}>ACCESSORIES</p>
            </div>
            <div className="search">
                <input type="text" placeholder="Search your item..."/>
            </div>
            <Link to='/Cart'>
            <div className="cart">
            <i class="fa fa-shopping-cart">{cart.length}</i>
            </div>
            </Link>
        </div>
    </>
    )
}

export default TopBar
