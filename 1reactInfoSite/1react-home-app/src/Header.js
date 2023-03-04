import reactLogo from "./images/logo192.png"
export default function Header(){
    return(
        <div>
        <header>
            <nav className="nav">
                <img src={reactLogo} alt="reactimage" className="nav-logo"/>
                <ul className ="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
        </div>
    )
}