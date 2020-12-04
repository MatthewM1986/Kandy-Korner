import React from "react"
import "./Product.css"

export const ProductHTML = ({ productObj }) => (
    <section className="product">
        <h3 className="product__name">Name:{productObj.name}</h3>
        <div className="product__price">Price:{productObj.price}</div>
        <div className="product_type">Type:{productObj.productTypeId}</div>
    </section>
)