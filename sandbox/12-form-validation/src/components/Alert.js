import React from "react"
import './alert.css'

export default function Alert(props)
{
    return (
        <div className='alert'>
            {props.message}
        </div>
    )
}