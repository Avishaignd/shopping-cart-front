import React, {useContext} from 'react'
import { ProductContext } from '../lib/context'
import Product from './Product'

export default function ProductList() {

    const context = useContext(ProductContext)

    return (
        <div className="my-list">
         {context.products.map(product => {
             return <Product key={product.id} props={product} />
         })}   
        </div>
    )
}
