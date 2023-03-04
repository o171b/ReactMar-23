import React from "react";
import NavBar from './components/Navbar.js';
import Main from './components/Main.js'
import './style.css'


export default function App() {
    return (
        <div className="container">
            <NavBar />
            <Main />
        </div>
    )
}


