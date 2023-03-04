import React from "react"

export default function Joke(props) {
    const [isShown, setisShown] = React.useState(false)
    
    function toggleShown(){
        setisShown(prevShown => !prevShown)
    }
    
    return (
        <div>
        {props.setup && <h3>{props.setup}</h3>}
        {isShown &&<p>{props.punchline}</p>}
        <button onClick={toggleShown}>{isShown ? "Hide" : "Shown"} Punchline </button>

        <hr />
        </div>
    )
}

//making use of props created in app component
//to insert our js value inside of my JSX i need to wrap it in,
//curly braces, whatever is inside the curly braces is js and whatever is,
//outside the curly braces is JSX, think of it as traversing two parallel worlds,
//JSX world and js world
//inside the curly braces you can pass any js expression you can think of
//The <hr> tag defines a thematic break in an HTML page (e.g. a shift of topic). 
//The <hr> element is most often displayed as a 
//horizontal rule that is used to separate content (or define a change) in an HTML page.
//the line that seperates the jokes is the hr tag