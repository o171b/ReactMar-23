# useEffect dependencies Array

import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)
    
    console.log("Component rendered")
    
    // side effects
    React.useEffect(function() {
        console.log("Effect ran")
        // fetch("https://swapi.dev/api/people/1")
        //     .then(res => res.json())
        //     .then(data => console.log(data))
    },[count])
    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
        </div>
    )
}

# 1. I've made a couple of modification to our app to demonstrate exactly what's happening within useEffect. I cameup with the simplest counter app that has a single button that says add and something that displays what the current count is in state. The reason i did this is was just to make it so that we had a really easy way to trigger rerenders and state changes on our App here. I also replaced our use effect callback function with `console.log("Effect ran")` that lets us know that this effect function ran. If i refresh the site we'll first get `console.log("Components rendered")` and then we get `console.log("Effect ran")` 

# 2. With my little counter i can trigger a manual rerender by just clicking the add button and we can see that when i click the add button it updates the state behind the scenes `React.useState(0)` so it changes from 0 to 1 and it rerenders our component now with count = 1 `const [count,setCount]` , we get our `console.log("component rendered")` because its a function call here on the top level of our component. it then skipped down here `in the return statement` and rendered our ui so that it can display the correct count now that count is set to 1 and last of all it ran the `React.useEffect()` which ofcourse runs after every render.

# 3. As we talked about the first parameter to this useEffect is this call back function `React.useEffect(function(){})` but there is a second parameter which i mentioned earlier is optional but which you'll use all the time and that is something called as a `dependencies Array[]` . The concept is that the array that we pass as a second parameter to useEffect will contain values that if they change from one render to the next will cause this effects to run `api code` in other words it limits the number of times that this effect will run or rather it determines when this effect will run instead of running after every single render.

# 4. Now if i leave this as an empty array [] it effectively tells react i want to run this function on the very first render of my component but then there are no dependencies to watch and trigger this effect to run again. So it runs once when the component first loads and thats it and never again. We can see this in action when we refresh our page we can see in the console screen `Component rendered` `Effect ran` but when we click on the add button we get only `Component rendered` thats because adding to our count is no longer running this effect and that's because we have an empty array which is not looking for any changes between one render and the next.

# 5. Now if i want to run this effect everytime count changed I would have to make sure that my effect knew that `[count]` was one of the dependencies that signalled to the effect to run again. so now we click refresh and `component rendered` and `Effect ran` both of them run together as we click add and increment our count. Under the hood this is how it works, 1. when i hit refresh states starts out at 0 ` [count,setCount]= React.useState(0)` and the component will take `[count]` and replace it with a `[0]` in the dependencies array, so here we have an array with the number 0 in the 0 index. Then when i click add, react will update the count from 0 to 1 and rerender my App component and the dependencies array becomes `[1]` under the hood , so 1 will be in the 0 index of the dependencies array. It will compare the first time effect run with the dependencies array having the value 0 and the next time when it runs it becomes 1, after comparing 0 with 1 and if any item in this array is different then it know to rerun this callback function in useEffect.

# 6. we cannot hardcode the dependencies array like for eg with a value [0] or any other value thats because everytime App rerenders useEffect() looks at my second parameter or the dependencies array its comparing the 0 as the first item in it to an array with a 0 as its first item in it, its gonna see that those are exactly the same values and therefore it will not run the callback function in useEffect() and that's why its called a dependencies array , useEffect depends on these values `[count]` to know whether or not it should rerun our effect.