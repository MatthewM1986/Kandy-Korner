import React from "react"
import { Route, Redirect } from "react-router-dom"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import { ProductList } from "./products/ProductList"
import { ProductProvider } from "./products/ProductProvider"

export const KandyKorner = (props) => {
    return (
        <>
            <h1>Nashville Kennels</h1>

            <h2>Locations</h2>
            <LocationProvider>
                <LocationList />
            </LocationProvider>

            <h2>Products</h2>
            <ProductProvider>
                <ProductList />
            </ProductProvider>
        </>
    )
}