import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Cards.css'

function Cards({ items, addProductToCart }) {

    const { brand, description, id, name, preview, price } = items
    return (
        <>
            <div className="cards" key={name}>
                <Link to={`/product/${id}`}>
                    <div className="inside-card">
                        <div className="preview">
                            <img src={preview} />
                        </div>
                        <div className="about-cards">
                            <p><b>{brand}</b></p>
                            <p><b>{name}</b></p>
                            <p style={{ fontSize: "13px" }}>{description}</p>
                            <p>Rs : {price}</p>
                            <button onClick={() => addProductToCart(items)}>+</button>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Cards



// function outer(){
//     var a =10;
//     function inner(){
//         console.log(a);
//     }
//     return inner()
// }

// outer()()

const factorial =(n)=>{
    if(n==1){
        return 1
    }
    else{
        return n*factorial(n-1)
    }
}


5,4,3,2,1



