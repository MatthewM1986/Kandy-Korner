import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationHTML } from "./Location"
import "./Location.css"

export const LocationList = () => {
    // This state changes when `getLocations()` is invoked below
    const { locationsArray, getLocations } = useContext(LocationContext)
    /*
    What's the effect this is reponding to? Component was
    "mounted" to the DOM. React renders blank HTML first,
    then gets the data, then re-renders.
    */
    useEffect(() => {
        getLocations()
    }, [])

    // old code
    //     return (
    //         <div className="locations">
    //             {
    //                 locationsArray.map(loc => <LocationHTML key={loc.id} locationObj={loc} />)
    //             }
    //         </div>
    //     )
    // }

    return (
        <div className="locations">
            <h1>Locations</h1>
            <button onClick={() => props.history.push("/locations/create")}>
                Add Location
    </button>
            <article className="locationList">
                {
                    locationsArray.map(loc => {
                        return <Link key={loc.id} to={`/locations/${loc.id}`} >
                            <h3>{locationLoc.name}</h3>
                        </Link>
                    })
                }
            </article>
        </div>
    )
}