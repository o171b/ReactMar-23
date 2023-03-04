# API example code

import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    
    // console.log("Component rendered")
    
    // fetch("https://swapi.dev/api/people/1")
    //     .then(res => res.json())
    //     .then(data => setStarWarsData(data))
        
    // side effects
    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}

# Looking at this api interaction for an e.g. if we look at our code , that i've commented out so that it doesnt infinitely rendering, you can see react is essentially doing what its told, to put something on the screen its trying to manage state and its trying to keep state and screen in sync, if state ever changes it needs to rerender the component, as a side note if App() component was receiving props and somehow those props are also going to change for e.g. if those props were a piece of state in higher up component that then changed this App component will also rerender.

# so with out code (api code) living here on the top level of our component, that's the <App /> component, react doesnt really have a way to stop us from setting the state here `.then(data => setStarWarsData(data)` and causing the rerender which would then set the state again causing the rerender and so forth in that infinite loop.

# so the react team gives us a really nice hook called useEffect(). In the documentation this is called the effect hook and i like to think of it as a tool that react has given us the developers sort of like a blank canvas that allows us to interact outside of the react eco system which again mostly consists of state,props and user interface that it puts up in the page. And i like to think of useEffect() hook as being a tool that allows us to sync react state with those outside systems like our local storage or an API.