import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { getUser } from '../lib/api'
import { UserContext } from '../lib/context'
import Product from './Product'

export default function Cart() {

    const user = useContext(UserContext)
    let {id} = useParams()
    useEffect(() => {
        if (id){
            getUser(id)
            .then((response) => {user.user = response})
        }
    }, [])


    return (
        <>
            {user.user && user.user.cart ?
            user.user.cart.map(product => {
                return <Product key={product.id} props={product} />
            })
            :
            <h1>Your cart is empty</h1>
            }x
        </>
    )
}
