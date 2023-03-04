#css
1. in css we use flexbox in this app to align the header items horizontally
as they were in a single line initially.
2. .form--button {
    grid-column: 1 / -1;
}
we want the grid column to spread all through the beginning to the end
-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------
#react
1. the primary thing that sets apart a static website that we've been building so far,
with web applications is the ability for the user to actually interact with our page.
inorder for a user to interact with our page we've to be listening for different events,
on that page and then reacting when those events happen.
Lets get a quick overview on how this app works. As soon as the app loads for the very,
first time its immediately going to make a call to an api called image flip, which will
return to us an array of 100 meme images that are the most popular at that time, then
clicking the get new meme image will simply randomly chose those 100 images in the array
that got returned to us.

#event listeners
import React from "react"

import React from "react"

export default function App() {
 1.   function handleClick(){
        console.log("I was clicked")
    }
    return (
        <div className="container">
            <img src="https://picsum.photos/640/360" 
 2.           onMouseOver={function(){
                console.log("Hov")
            }}/>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

there are two ways of writing functions in react marked 1 and 2
- check MouseEvents react documentation as they are used 95% of the time on websites
-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------
#memesData.js
1. if you look closely on memesData its an object {} which has a data property and that data has
memes property, so i need memesData.data.memes and that's my array.
so we'll create a function getMemeImage and what we want is when we click on the button we get a random
number and hence a random image.
2. then i can say const url then i'll index into memes array at the index of random number
const url = memeArray[randomNumber].url this is my object and a .url property
then when you console.log(url) you will get the random urls present in the array.
-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------
#React State
1. one of the major points of confusion is understanding the difference between props
and state.
"props" - refer to the properties being passed into a component in order for it to work
correctly, similar to how a function receives parameters. A component receiving props is not
allowed to modify those props. (i.e they're immutable)
eg: regular js function
function addTwoNumbers(a,b){
    a = 5//initializing a value inside of a function is not adviced
    return a+b
}
console.log(addTwNumbers(1,2))

eg: React props
function Navbar(props){
    props.coverImage = "something else"
}
changing the value o f props.coverImage is a huge red flag because props should be immutable,
more specifically props should never change from within the body of our component itself.

2. "State" refers to values that are managed by the components, similar to variables declared
inside a function. Anytime you've changing values that should be saved/displayed, you'll likely
be using state.
this is a js example to explain
function greet (name){
    return `hi,${name}`
}

console.log(greet("omair"))
the point its my function here is receving a parameter name, this parameter is not
something i'll want to change in the way of saying:
function greet (name){
    name = "something different"
    } because we're expecting the outside user to provide you the name.
Similarly in react we're not going to take any props and then just change them.
-----------------------------------------------------------------------------------------------
3. Challenge
import React from "react"

export default function App() {
    /**
     * Challenge: Replace our hard-coded "Yes" on the page with 
     * some state initiated with React.useState()
     */
    const result = React.useState("Yes")
    console.log(result) //["Yes", ƒ()] we get an array
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1>{result[0]}</h1>
            </div>
        </div>
    )
}

4. Array destructuring
 However there is a much smoother way to deal with this and this requires us to use array destructuring
since result = React.useState.. returns an array we can destructure that array immediately 
[result] = React.useState.. and receiving it as a variable and then we can add two values
[result, func] = React.useState because we know the second value is a function, now in this case
if we console.log(result) we see that we've pulled out the first item in the array `Yes` and 
destructured it into its own variable called result. Whats nice about array destructuring we get
to call it whatever we want, so instead of [result,func] we can call it [whatever432, func]
import React from "react"

export default function App() {
    const [isImportant, func] = React.useState("Yes")
    console.log(isImportant)
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}
https://scrimba.com/learn/learnreact/usestate-array-destructuring-co70846728c7d60f51fa1997c

5. let use state in a code example

import React from "react"

export default function App() {
    const [isImportant, setIsImportant] = React.useState("Yes")
    setIsImportant()
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}

- the convention is instead of using func as function name we use set, so we'll name
our function as setIsImportant to match our parameter name IsImportant
setIsImportant() is a function and whatever value i provide to it will be the new version
of the state.
- "my take" how i see it is that React.useState("Yes") is a method, in other words a special function,
which returns an array "Yes" if we dont provide "Yes" its undefined, and it also returns func in the array, so we use the second value of our array and give it name as setIsImportant and its value as "No" .
so the new value "NO" is the new version of state, hence our state has two versions "Yes" and "NO" 
import React from "react".
check the code example below

export default function App() {
    const [isImportant, setIsImportant] = React.useState("Yes")
    /**
     * Challenge: 
     * 1. Create a function called `handleClick` that runs
     *    setIsImportant("No")
     * 2. add a click event listener to the div.state--value
     *    that runs `handleClick` when the div is clicked.
     */
    
    function handleClick() {
        setIsImportant("No") //we've given our handleclick function value as No,
        //when we click the button the state changes from its initial state of "Yes" to "No"
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value" onClick={handleClick}>
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}
-----------------------------------------------------------------------------------------------
6. counter practice use state
import React from "react"

export default function App() {
    /**
     * Challenge: 
     * See if you can think of a way to add 1 to the count
     * every time the + button is clicked
     */
    const [count, setCount] = React.useState(0)
    
    function add() {
        setCount(count + 1) 
    }
    //using count = count +1 or count ++ is a big no no, you should never ever do that modifying state as we should never run an equal sign after our state "count" value so we'll just use count + 1
    function subtract(){
        setCount(count - 1)
    }

    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}
-----------------------------------------------------------------------------------------------
7. changing state with callback function (recommended)
import React from "react"

export default function App() {
    const [count, setCount] = React.useState(0) //initial value is 0
    /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */
    function add() {
        setCount(prevCount => prevCount + 1) //read as old value arrow function return new value
    } 
    // Challenge: update `substract` to use a callback function
    
    function subtract() {
        setCount(prevCount => prevCount - 1)
    }
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}
-----------------------------------------------------------------------------------------------
8. ternary practice
export default function App() {

    const isGoingOut = true //flip this to true or false

    let answer = isGoingOut === true ? "Yes" : "No" //using ternary single line of code
    //you can get rid of true as is going outs initial state is true
    let answer  //without ternary you write extra lines of codes
    if(isGoingOut === true) {
        answer = "Yes"
    } else {
        answer = "No"
    }
-----------------------------------------------------------------------------------------------
    10. 
    export default function App() {
    const [isGoingOut, setIsGoingOut] = React.useState(true)

    function changeMind() {
        setIsGoingOut(prevState => !prevState)
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div onClick={changeMind} className="state--value">
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}
a. React.useState returns an array of two elements, the first element is undefined and the second element is an array, in our code above, we gave undefined element a value true, so we're left with the second element which is func or a function. 
b. we'll use the second element of our state that is func and create a function called changeMind() and inside its body we'll let it run our second element that is setIsGoingOut function and let that function take my previous version of state and we'll return => !prevState opposite of what previous state used to be.
!prevState = prevState ? false : true , !prevState is shorthand

---important , rememeber the console logging state gave us an array of two values [undefined,func]
undefined will be our initial state when we give it some value and func can be our other state.
these states can be either true or false, incrementing decrementing numbers, displaying and hiding something on our website etc
--important in our code above const [isGoingOut, setIsGoingOut] , never ever modify the initial state isGoingOut, only the setter setIsGoingout should be modified. the word set can be any name, but its a convention to use set.
-----------------------------------------------------------------------------------------------
9. state Arrays 
simple app to add item text eg: thing1, thing2, thing3 etc

function App() {
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        setThingsArray(prevState => {
            return [...prevState, `Thing ${prevState.length + 1}`]
        })
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
- let analyze the above code
a. function addItem()
- for modifying our array we grab the setThingsArray element, we should not modify thingsArray.
- in the setter function i can provide one of two options here, i can either replace it with a new value that completely replaces the old value of state or i can provide it with a callback function and that callback function would receive as its parameter the old version of state which i can use to determine the new version of state. which option should we use?
well if i just provided a new value then then i wouldnt really be able to add anything to my existing array["Thing 1", "Thing 2"] i'll be simply replacing my existing array. what i want to do is add an item to the array that means i do depend on the old version of state or the old array is inorder to determine my new array, so i need to provide a callback function.
- then we use a callback setThingsarray and use spread operators to copy the arrays inside a new array and and then add a new item to the end of our prevThingsArray
-----------------------------------------------------------------------------------------------
10. state objects
App.js
import React from "react"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    
    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
 function toggleFavorite(){
        setContact( prevC => {
            return {
                ...prevC,
                isFavorite : !prevC.isFavorite
            }
        })
    }
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img 
                        src={`../images/${starIcon}`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}

...prevC is nothing but spreading the object which has firstName,lastName etc,
instead of copying and pasting the whole object and making it verbose we use ...prevC spreading the object and it does the same task.
check 6:21:00 
----


