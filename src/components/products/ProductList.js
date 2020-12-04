import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductHTML } from "./Product"
import "./Product.css"

export const ProductList = () => {
    // This state changes when `getProducts()` is invoked below
    const { productsArray, getProducts } = useContext(ProductContext)
    /*
    What's the effect this is reponding to? Component was
    "mounted" to the DOM. React renders blank HTML first,
    then gets the data, then re-renders.
    */
    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className="products">
            {
                productsArray.map(prod => <ProductHTML key={prod.id} productObj={prod} />)
            }
        </div>
    )
}