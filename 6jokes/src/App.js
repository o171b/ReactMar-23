import React from "react"
import Joke from "./Joke"
import jokesData from "./jokesData"

export default function App(){
    const jokeElements = jokesData.map(joke =>{
        return <Joke setup={joke.setup} punchline={joke.punchline} />
    })
    return (
        <div>
            {jokeElements}
        </div>
    )
}

//1. let call the variable jokeElements, it will return an array when i call jokesData.map method,
//inside of my .map im gonna take a look of each one of my joke objects and im gonna return,
//a joke component
//2. each of the joke objects "jokesData.map(joke'is an object')" that im looking inside of,
//my .map are objects that are present in our jokeData.js file and each object has two properties,
//setup and punchline, these are our props. this setup prop will be equal to joke.setup, im using,
//curly braces after setup is because im leaving JSX and jumping to js, you can change the prop name,
//of the component to anyname you want, but make sure the actual data name is the same as the jokesData.js file
//3. the last thing is just render my jokeElement inside a div tag
//4.props makes our life much simpler, compared to the hardcoded version of our code below

//hard coded joke component
        /*<div>
            <Joke 
            setup="I got my daughter a fridge for her birthday." 
            punchline= "I can't wait to see her face light up when she opens it" />
            <Joke 
            setup="How did the hacker escape the police?"
            punchline= "He just ransomware!" />
            <Joke 
            setup="Why don't pirates travel on mountain roads?"
            punchline= "Scurvy" />
            <Joke 
            setup="Why do bees stay in the hive in winter?"
            punchline= "Swarm" />
            <Joke 
            setup="What's the best thing about Switzerland?"
            punchline= "something" />
        </div>
    )
}

//setup,punchline are Joke props */