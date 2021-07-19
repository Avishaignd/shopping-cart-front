import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getUser } from '../lib/api'
import { UserContext } from '../lib/context'
import Product from './Product'

export default function Cart() {

    const user = useContext(UserContext)
    // let location = useLocation()
    // let path = location.pathname
    // let id = path.split('/')[2]
    // getUser(id)
    
    // console.log(id);


    return (
        <>
            {user.cart.length > 0 ?
            user.cart.map(product => {
                return <Product key={product.id} props={product} />
            })
            :
            <h1>Your cart is empty</h1>
            }
        </>
    )
}
