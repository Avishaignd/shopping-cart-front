import React, { useState, useEffect } from 'react'
import { getAllTransactions } from '../lib/api'
import Transaction from './Transaction'
export default function TransactionList() {

    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        getAllTransactions().then((response) => {setTransactions(response)})
    }, [])

    return (
        <>
        <h4 className='mt-5'>All past transactions</h4>
         {transactions.map(transaction => {
             return <Transaction props={transaction} key={Math.random()} />
         })}   
        </>
    )
}
