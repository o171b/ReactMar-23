import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)
    
    
    React.useEffect(function() {
        console.log("Effect ran")
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])
    
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}

/**
     * Challenge: Combine `count` with the request URL
     * so pressing the "Get Next Character" button will
     * get a new character from the Star Wars API.
      * fetch(`https://swapi.dev/api/people/${count}`)
      * from this
      * fetch(https://swapi.dev/api/people/1)
     * Remember: don't forget to consider the dependencies
     * array!
      * this will be in dependencies array [count] 
     */
/* when i click get next character it updates [count], updating [count reruns] my function
const [count, setCount] or rather rerenders my App component
the effect then looks at the old dependency array [count] and notices something has changed
which triggers my function to run again with a new number in fetch(https...${count})*/