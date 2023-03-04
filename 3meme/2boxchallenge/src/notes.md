This is a challenge to reenforce some of the past topics we've been learning about.
/**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */
const result = React.useState()
console.log(result) you will get undefined, f()
if i put something inside the parentheses eg: React.useState("hello")
console.log(result) i will get hello, f()
so hello is the default value for the state variable

1. in boxes.js i've created an array of objects which has two props id and on. our first challenge is to initialize some state inside of our App component with the default value being this boxes array. then we'll map over it.
- we'll start by initializing some state we'll call them squares
const [squares, setSquares] = React.useState(boxes)
and we'll pull in our boxes as the initial state or value.
- then we'll map over the boxes
const squareElements = squares.map(square => (
    <div className="box" key=(square.id)></div>
))
i'll call it squareElements and that's going to be square.map for each square that we're looking at i want to return a div, notice that im using parenthesis instead of curly braces, its simply allowing me to use the implicit return , we'll give the div a className and as we're mapping so i need to provide a key and i can use the id property that's coming for the objects in boxes.js file.
we then render our squareElements inside main tag.
over in our style.css we'll set a style for our box.
2. Dynamic Styles
- to add dynamic styles i can add a style prop to my div and in react im going to provide an object {},
but this set of curly braces dont represent an object, it just represents that im going inside js inside of JSX so i've to provide another set of curly braces {{}} to represent my style as an object. often time to avoid any confusion, i will not define that object {} directly inside of my markup but instead i will create a seperate variable called styles and set that equal to an object style = {} and then i can put styles directly inside of my markup <div style={styles}>.
one thing to know about these style is that they need to be in camelCase, so if i want to change the background color, i cant say background-color because its not a valid keyname in js object, instead i will use backgroundColor: "black", because its an object im not gonna use = instead i will use : to give my key a value.
so why is this benefecial over regular css? because im using js i dont necessarily have to have a hardcoded black value here.
- i'll create a new file called Box.js and i will let the <Box/> component receive props, and i'll copy the <div className="box"></div> inside our Box component and render the Box component inside of our App.js, the className is already rendered inside our Box.js but i'll keep the key to be rendered in our <Box/> component inside App.js and in our <Box/> i'll pass a prop called on, on={square.on}, each square in square =>, here represents one of the objects in my array and that has a property called on.
- the last part of the challenge is simply to make use of props.on to determine what the background color should actually be. so using dynamic style i'll be creating a variable called styles, and thats gonna be an object were the background color is going to look at props.on and if its true it will be this dark color and if it's falsae it'll be transparent.
then i can simply add a style prop, notice that my variable is called styles or u can call it whatever you want however this property needs to be explicitly style, so i let style equal to the object that i created above styles. now you can see the boxes with false values will be white and the boxes with true value will be black.
- i'll initialize some new state we'll call it on and it'll also receive our setter function which i'll name setOn and the initial value should be determined by looking at props.on
const [on, setOn] = React.useState(props.on)
i'll update const styles to not look at props.on anymore but to look at my new state value on, then i'll create a function lets call it toggle and it calls setOn looking at the prevOn previous version of on and simply giving me the opposite of whatever the previous version of on was, i can then set this up as a click event listener to run toggle. that way when we click on the boxes we can flip their values. black becomes transparent and transparent becomes black upon clicking on them.
this way state is inside of box component, which means that each box can change its own state but we want the parent component thats App.js to control the state of box, next we'll check that.
- previously what we did was we created new state inside of each box and initialized that state based on the incoming prop of on and its called DERIVED STATE.
if you think about it we created some state in App.js to maintain all of the squares already, so when we set state in each one of our boxes we had state both in App.js and everyone of our boxes which in the end means that there are two sources of truth, when the box had the ability to update its own state, it was not updating the state on the App component it was only updating its local state that it has derived based on the incoming props. so we're gonna approach this in a differnt way, instead of putting state and a setter inside each one of our boxes, we're going to make use of the state that already exists in our <App /> and instead we're going to create a function called toggle inside of our App component and pass that toggle function down to each one of our box instances, anytime one of the Box components gets clicked it'll run this toggle function and essentially tell the app component, "hey the state that you're maintainig needs to change", then when that state changes,lets say from true to false react will rerender the app component because its state has changed and therefore will rerender the box components but now the first one having an on value of false.
check code in boxderived.md


2. a.create a toggle function that logs "clicked" to the console.
b. pass that function down to each of the Box components and set it up so when they get clicked it runs the function.
- create a toggle function in App.js
- we can chose the prop name that we want, we can use onClick that looks like an click event listener or you can name it whatever you want i will choose toggle={toggle}
- and now inside of Box.js im receving a prop called toggle we'll insert it in our div tag and use the onclick event listener Onclick ={props.toggle}
in our toggle function console.log("clicked") so see if the code is working as intended. it should output a click when we click inside the boxes.
- now here is the tricky part, in our previous code when each box was initialized in its own state, it was really simple to know which box was flipping its value because well each box was maintaining its own state. However now with our toggle function, the toggle function has no idea which box ran its code. Our goal is to give the toggle function the ability to know which box was clicked so that we can correctly update the state array.
so instead of running props.toggle in our onClick event, we can run our own function () => which then runs .toggle this is the function that receives the event (event) => , however we're not gonna make use of that so we'll leave it as () => , then i will pass a prop inside the div in App.js id={square.id} and then i can use props.id and i can use it to pass the information to my toggle() , this is how it looks
onClick={()=>props.toggle(props.id)}
now if i console log(id) inside of toggle function by clicking on each box i get their ids.
Now i can use that id to update the correct square in my setSquares function.

c. use setSquares to update the correct square in the array.
d. Make sure not to directly modify state.

- one solution is this imperitive way of code
function toggle(id) {
        setSquares(prevSquares => {
            const newSquares = []
            for(let i = 0; i < prevSquares.length; i++) { //we're using c style loop
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
- however react adheres to declarative code, so we'll stick to the below code
function toggle(id) {
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }
let examine the above code
- everytime box gets clicked onClick={()=>props.toggle(props.id)} , it runs () => this inline function and that function will run props.toggle remember we did that to pass a custom parameter props.id , which is the id of the box itself.
- then if we go to the toggle function it will call setSquares our setter square function "const[squares, setSquares] this here. and then we need to use the callback function (prevSquares =>..{..}) version if setSquares because we care what the previous array looked like and then we'll map over those squares, as a reminder .map returns a new array without modifying the original array that'll have the same length as the original array, and whatever we return from the callback function of .map is what will get placed in the same index in the new array as what was in the original array.
what we're doing is everytime we loop over an item in this array "square.id" is we're checking if its id matches the id we passed in the toggle(id) function "we're checkcing square.id===id, the second is is the one we passed in our toggle function" and if those id's match that means it is the square that was clicked if thats true ? then i want to replace the old object with a brand new object using spread operator and this is crucial so that im not updating state directly, this object ...square is going to pull in all of the values of square exactly as it was, but then its going to overwrite the on value with its opposite "!square.on" , however if this is not the box that was clicked just give me the old square ":square"
- lastly one other clever solution is instead of passing id down to the Box component, we could just say our toggle function that we're passing down is going to be an individualized toggle function and we can pass the square.id immediately as we're passing this toggle function down.
toggle={toggle} this becomes
toggle={()=> toggle(square.id)} this
in essense this creates something known as closure, each instance of our box will have its own toggle and it will remember its own id(square.id) , then we can get rid of our id prop id={id} and in Box element i can change the
onClick={()=>props.toggle(props.id)}
to
onClick={props.toggle}