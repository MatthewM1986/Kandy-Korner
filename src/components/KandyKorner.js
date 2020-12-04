import React from "react"
import { Route, Redirect } from "react-router-dom"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"

export const KandyKorner = () => (
    <>
        <h1>Nashville Kennels</h1>

        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
    </>
)