import React from "react"
import "./Location.css"

export const LocationHTML = ({ locationObj }) => (
    <section className="location">
        <address className="location__address">Address:{locationObj.address}</address>
        <div className="location__squareFootage">Sq.Ft.:{locationObj.squareFootage}</div>
        <div className="location__handicapAccesible">Handicap Accesible:{locationObj.handicapAccesible}</div>
    </section>
)
