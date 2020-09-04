import React from "react"

// Import the Welcome function from ./Welcome.js
import {Welcome} from '../components/Welcome'

export default function About(props)
{
    return (
        <div>
            <Welcome/>
            <h1>About Us</h1>
        </div>
    )
}