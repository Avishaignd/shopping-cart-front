import React, {useState, useEffect, useContext} from 'react'
import { getAllProducts } from '../lib/api'
import { ProductContext, UserContext } from '../lib/context'
import ProductList from './ProductList'

export default function Home() {

    const myContext = useContext(ProductContext)
    const user = useContext(UserContext)

    const setProds = async () => {
        let prods = await getAllProducts()
        myContext.products = prods
    }
    setProds()

    return (
        <div>
            <ProductList />            
        </div>
    )
}
