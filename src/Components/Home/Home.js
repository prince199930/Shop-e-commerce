import axios from 'axios'
import React, { useEffect } from 'react'
import Cards from '../Cards/Cards'
import {homeProductsAPI} from '../utils/apis/index'
import { useSelector, useDispatch } from 'react-redux'
import { addProducts, getProducts } from '../../actions/index'
import Carousel from '../Carousel/Carousel'


function Home(props) {
    const dispatch = useDispatch()
    const product = useSelector(state=>state.product)
    
    useEffect(() => {
        axios(homeProductsAPI).then((res)=>dispatch(getProducts(res.data)))
    }, [])
    const addProductToCart =(product)=>{
        
        dispatch(addProducts(product))}
    return (
        <>
        <div>
            <Carousel/>
            <div style={{display:"flex",flexDirection:"row", columnGap:"5%", flexWrap:"wrap"}}>
                <h1>Clothing for Men and Women</h1>
            {
            product?.map((items)=><Cards items={items} addProductToCart={addProductToCart}/>)
        }
        </div>
        
        </div>
        </>
    )
}

export default Home