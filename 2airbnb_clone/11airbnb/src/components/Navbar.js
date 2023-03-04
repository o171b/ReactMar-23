import React from "react"
import airbnbpic from '../images/airbnb-logo.png'

export default function Navbar(){
    return (
        <nav>
            <img src={airbnbpic} alt="airbnblogo" className="nav--logo" />
        </nav>
    )
}

