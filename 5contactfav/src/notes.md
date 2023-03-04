setting state from child components 
 
 /**
     * Challenge: Move the star image into its own component (Star)
     * - It should receive a prop called `isFilled` that it
     *   uses to determine which icon it will display
     * - Import and render that component, passing the value of
     *   `isFavorite` to the new `isFilled` prop.
     * - Don't worry about the abiliity to flip this value quite yet.
     *   Instead, you can test if it's working by manually changing
     *   `isFavorite` in state above.
     */

1. we create a Star.js file
2. export default function Star(props) {
    const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
    return (
        <img 
            src={`./images/${starIcon}`} alt="staricon"
            className="card--favorite"
            onClick={props.handleClick}
        />
    )
    it receives a prop called isFilled that determines which icon to display
3. import Star from "./Star" importing Star to App.js to render it
<Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
we cannot use onClick={toggleFavorite} directly on the Star component, because Star component is a custom component that we created and all of the properties that we pass are custom properties so simply putting onClick event listener doesnt magically register it the onClick attribute need to exist on native dom element the ones with lower case such as <img> <header> <article> <div> and all the dom element you know of.
so you can see we created a Star component and then we added the img tag and used the onClick event listener on it and say that the value of onClick comes from props.handleClick.

Recap:
we created our toggleFavorite() , we passed it to a custom component <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} /> , in a custome prop called handClick and over in Star.js star component its receiving props Star(props) and its registering a real event listener onClick={props.handleClick}

----------------------------------------------------------------------------------------------
4. Simple App that passing data around in react
a. React passes data from the top, top-down approach. it means a child cannot pass data to another child, but a parent can pass data to both its child. In this simple app we see that state is passed in the parent App.js component and then its passed to both Header.js and Body.js using props
b. understanding that this is the way data flows in react can be really crucial in helping you architect your application in a way that you can share state amongst the component that only need it. It wouldnt be a great idea to initialize state way near the top of your component if you dont have components along the entire tree that need it. if there is a component down at the tree that needs a state, there is no reason to pass the state to its grandparent we can just pass it to its parent. As a rule of thumb keep state as local as you can or keep it as closely tied to the component or components that need it.
App.js
import React from "react"
import Header from "./Header"
import Body from "./Body"

export default function App() {
    const [user, setUser] = React.useState("Joe")
    
    return (
        <main>
            <Header user={user} />
            <Body user={user} />
        </main>
    )
}

Header.js
import React from "react"

export default function Header(props) {
    return (
        <header>
            <p>Current user: {props.user}</p>
        </header>
    )
}

Body.js
import React from "react"

export default function Body(props) {
    return (
        <section>
            <h1>Welcome back, {props.user}!</h1>
        </section>
    )
}
