import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {productsAPI} from '../utils/apis/index'

function ProductDetails() {
    const [product, setProduct] = useState({})
    const {id} = useParams()
   
    
    useEffect(() => {
        axios(`${productsAPI}/${id}`).then((res)=>setProduct(res.data))
    }, [])
    const {
        brand,
        description,
        isAccessory,
        photos,
        name,
        preview,
        price,
        size
    }=product;
    console.log(product.name)
    return (
        <div>
            <h1>Product Details-{id}</h1> 
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{isAccessory}</p>
            <img src={photos}/>
            <img src={preview}/>
            <p>{price}</p>
            <p>{size}</p>
        </div>
    )
}

export default ProductDetails
