1. export default function App(props){

  const [squares,setSquares] = React.useState (boxes)

  const styles = {
    backgroundColor: props.on ? "#222222" : "#cccccc"
  }

  const squareElements = squares.map(square =>(
    <div 
    className="box"
    style = {styles}
    key={square.id}
    >
    </div>)
  
  )
  return(
    <main>
    {squareElements}
    </main>
  )
}
//everything inside the App.js file but boolean is not activated so you wont be able to see the black squares or false squares.
at this stage you wont be able to flip the squares.

===========================

2. creating a Box element and moving styles variable into it

export default function App(props){

  const [squares, setSquares] = React.useState(boxes)


  const squareElements = squares.map(square =>(
   <Box key={square.id}  on={square.on}  />
  
  ))




  return(
    <div>
      {squareElements}
    </div>
  )
}


3. export default function Box(props){
    const styles = {
        backgroundColor: props.on ? "#222222" : "#transparent"
    }
   return(
    <div style={styles} 
    className="box"
    >

    </div>
   )

}

at this stage the boxes with on value will be turned black

===========================

4. code for Box.js which has the control of its own states, but we dont want the Box.js which is a child component of App.js to control its own state,
we want the parent component to control the states of the child Box.js component, here's the code
import React from "react"

export default function Box(props){

    const [on, setOn] = React.useState(props.on)

    const styles = {
        backgroundColor: on ? "#222222" : "transparent"
      }

    function toggle(){
        setOn(prevOn =>{
            return !prevOn
        })
    }

    return(
        <div
        className="box"
        style={styles}
        onClick={toggle}
        ></div>
    )
}

let dig into this concept using an example of a todo list app
- Our App would be like the todo list and these boxes would be like a todo item, the value of on can be replaced with a value may be completed,
as to whether or not that to-do item has been completed, structuring it the way we did here, every item in our todo list would be incharge of knowing
whether it by itself has already been completed or not. when i first started writing react this seemed like the obvious thing to do, however i've since
learned that there is actually a better way to structure our application so that state is only held in the App component in our example here.
There certainly might be situations where creating states in each one of the child components and initializing that state based on the incoming props,
"React.useState(props.on)" might make sense, however general consensus is that if you find yourself initializing state by using incoming values of
some prop "props.on", there's probably a better way to do this, and that's what we'll be diving into next.

===========================

5. Previously what we did is we created a new state inside each of our Box components and initialized that state based on the incoming prop on,
and it turns out that there's actually a name for when you create state that is initialized by incoming prop and its called Derived state.
And it turns out that we probably dont need Derived state. Check the React official documentation titled You probably dont need derived state.
It turns out that some weirdness happens if you pass a prop to a component eg: our Box component, and take that prop and set state based on that prop.
If you think about it in App.js we actually created to maintain all of the squares already. So when we set state in each one of our boxes, we've
state both in the App component and in everyone of our boxes, which in the end means that there are two sources of truth, when the box has the ability
to update its own state, its not updating the state on the box component, its only updating its local state that it has derived based on the incoming
props and because of that there were multiple sources of truth.

We're going to approach this in a different way, instead of putting state and a setter inside each one of our boxes, we'll make use of the state
that already exists in our App and instead we'll create a function called toggle in our App component and then pass that toggle function, down to each
one of our box instances. Anytime one of the box components gets clicked we'll run this toggle function and essentially tell the App component
"Hey the state that you're maintaining needs to change" , then when that state changes, lets say from true to false react will rerender the App
component and therefore rerender the box components with the on value of false. This way of doing things is more complex, however in the end it is
a better practice than using Derived state to manage our state.

===========================

6. App.js
export default function App(props){

  const [squares,setSqaures] = React.useState(boxes)

  function toggle(id){
    console.log(id)
  }

  const squareElements = squares.map(square =>{
    return(
      <Box
      key={square.id}
      id={square.id}
      handleClick = {toggle}
      toggles={toggle}

      />
    )
  })

 


  return(
    <main>
      {squareElements}
      
    </main>
  )
}

Box.js
export default function Box(props){

    

    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
      }


    return(
        <div
        className="box"
        style={styles}
        onClick = {(event)=>props.toggles(props.id)}
        
        ></div>

    )
}

- at this stage when we click on each of the squares i get their id numbers.
- now i can use that id to update the correct square in my setSquares function.
- id={square.id}
first we added the id prop to our Box component inside App.js
- onClick = {(event)=>props.toggles(props.id)}
second we added an event function to our props.toggle object which received props.id as a parameter
- function toggle(id){
    console.log(id)
  }
lastly when we console log our toggle functions parameter id, we get the id numbers as we click on the boxes
at this stage i can use my id to update the correct square in my setSquares function

===========================================================================================

7. we use our setSquares function, as usual we do need access to our old version of squares in order to determine the new value of our squares
so im gonna say (prevSquares) 
everytime i click on one of these squares its running the click event handler (onClick={}) defined in Box.js , that click event handler is running
the toggle function that it received through props and passing in the id (props.id) that it also received from props.
the toggle function is taking that id toggle(id) , running setSquares and running the function to determine what the new square should be.



we look at the previous array of squares "prevSquares" , and simply generate a new array "const newSquares = []" , loop over the previous array,
and when we run into the square in our loop where the id "currentSquare.id" matches the id in toggle(id), we create a new object
"const updatedSquare = {...currenSquare, on: !currentSquare.on}" that will replace the old object and push that to our array 
"newSquares.push(updatedSquare) , else if the ids dont match we just push the current square in its current form without any changes made,
to our new array "newSquares.push(currentSquare)" and we return that "newSquares" .
By returning that new array react will update our squares
this is the code written in c style imperative code, but react adheres to declarative code, so we'll write the below code again in declarative code.
function toggle(id) {
        setSquares(prevSquares => {
            const newSquares = []
            for(let i = 0; i < prevSquares.length; i++) {
                const currentSquare = prevSquares[i]
                if(currentSquare.id === id) {
                    const updatedSquare = {
                        ...currentSquare,
                        on: !currentSquare.on
                    }
                    newSquares.push(updatedSquare)
                } else {
                    newSquares.push(currentSquare)
                }
            }
            return newSquares
        })
    }

=================================================================================================================
8. same code declarative

we'll use .map method to help me create a new array and return that array all in one go
1. i can say return the prevSquares.map(()=>) and whatever i put into my map function is going to help determine my new version of the array
which then gets returned from my .map and returned from setSquares 
i need to look at each square "prevSquares.map(square)" "this "square" is each square", inside of my map , whatever i return from this callback
function "prevSquares.map((square) =>{}" "this is the callback function" , inside of my .map is what will get placed at the same index in
my original array "prevSquares" in the new array that i return.
2. then i will use a ternary and return that says does "square.id" match the id that i passed in my toggle function , 
"square.id === id" if so i will return "?" a new object "...square, on" that has all of the properties of square, except for the on property
",on" which is the opposite ! of "!square.on" , however if the id does not match ":" , i will simply return the "square"

- everytime i click on one of these squares its running the click event handler (onClick={}) defined in Box.js , that click event handler is running
the toggle function that it received through props and passing in the id (props.id) that it also received from props.
the toggle function is taking that id toggle(id) , running setSquares and running the function to determine what the new square should be.

this code is inside App.js

function toggle(id) {
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }