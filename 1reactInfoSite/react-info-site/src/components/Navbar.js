import React from "react"
import reactphoto from '../images/logo192.png'

export default function NavBar() {
    return(
        <nav>
            <img src={reactphoto} className="nav--icon" alt="react logo"/>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}