import React from "react"
import {Welcome} from "../components/Welcome"

export default function Reserved(props)
{
    return (
        <div>
            <Welcome/>
            <h1>Thank you for your reservation!</h1>
            <p>Your reservation details:</p>
            <ul>
                <li>Name: {props.reservation.name}</li>
                <li>Branch: {props.reservation.branch}</li>
                <li>Date: {props.reservation.date}</li>
            </ul>
        </div>
    )
}