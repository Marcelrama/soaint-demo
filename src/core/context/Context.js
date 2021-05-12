import React from 'react'

const Context = React.createContext({
    cars: [],
    addProductToCart: (elemento) => {},
    openCars: false,
    OpenMyCar: (elemento)=> {}
})

export const MyProvider = Context.Provider;

export default Context;