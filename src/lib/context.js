import React from 'react'

export const ProductContext = React.createContext({
    products: []
})

export const UserContext = React.createContext({
    firstName: "Avishai",
    lastName: "Gandelman",
    id: 1,
    email: "avishaignd@gmail.com",
    password: "123456",
    cart: [],
    isAdmin: true
})