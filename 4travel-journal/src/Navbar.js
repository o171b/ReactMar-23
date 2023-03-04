import React from "react"
import globepic from "./images/globe.png"

export default function Navbar(){
    return (
        <nav>
            <img src={globepic} alt="globelogo" className="globe--logo">
            </img>
            <h1 className="nav--text">My Travel Journal</h1>
        </nav>
    )
}