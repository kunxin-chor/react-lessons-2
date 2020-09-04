import React from "react"

// Import the Welcome function from ./Welcome.js
import {Welcome} from '../components/Welcome'

// Do a default import from ./HeroImage.js
import HeroImage from '../components/HeroImage'

// Do a default import from ./Alert.js
import Alert from '../components/Alert'

// Do a default import from ./Reserve.js
import Reserve from '../components/Reserve'


export default function Home(props)
{
    function confirmReservation(reservationDetails){
        props.confirm(reservationDetails);
        props.history.push('/placed');        
    }
    
    return (
       <div>
          <Welcome/>
          <HeroImage/>
          <Alert message="Please remember our discount vouchers expire end of Dec 2019!"/>
          <Reserve confirm={confirmReservation}/>
       </div>
    )
}