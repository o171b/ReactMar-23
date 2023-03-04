1. 
export default function Form() {
    const [firstName, setFirstName] = React.useState ("")
    console.log(firstName)
    function handleChange(event){


        setFirstName(event.target.value)
    }
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange = {handleChange}
            />
        </form>
    )
}

- we're gonna start simple with a single input , in vanilla js we'll have a submit button and when we click on it it runs some function gathers all the data at that time and then submit it to an api or wherever.
- what we'll be doing in react instead is maintaing up to date state for every change that happens in any input in our form.
- to accomplish this we need to do a few things, first of all we need some state to hold the current data thats typed in into our input. const [firstName, setFirstName] = ....
- then i need to listen to any changes that happens to this input box. we'll use an event called onChange and set it to a function called handleChange.
- in the parameter of handChange(), and i cant chose what needs to get passed into it, instead what gets passed by the browser is an event object. This event object is really large, it has a lot of information in it and if i console.log(event) i will get "SyntheticBaseEvent" , at this point open your browser and try to  dig in all of the properties of this event object. However there is one property in this event object that i care the most about and that is "event.target" , if i log .target i can see the html element that triggered this event. Now it looks like html in the console but in reality , but its just the dom object that triggered this event. that DOM object has a property that we care about for eg .value
"event.target.value" . when we start typing in our box we can see it consoles the current value on every key stroke of that specific input box.
- our challenge is to update the firstName state on every keystroke.
we will use setFirstName() state setter, in this case i dont really care what the state used to be inorder to determine what the state is about to be , because i've quick and easy access to the information that is being typed in the input box with "event.target.value" . and when i type in the input box sure enough our state is being updated with every key stroke.

2. In this challenge we'll add a lastname input into our form.
- we can use it this way, but this is DRY code
export default function Form() {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    /**
     * Challenge: Track the applicant's last name as well
     */
    
    console.log(firstName, lastName)
    
    function handleFirstNameChange(event) {
        setFirstName(event.target.value)
    }
    
    function handleLastNameChange(event) {
        setLastName(event.target.value)
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleFirstNameChange}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleLastNameChange}
            />
        </form>
    )
}

This seems to be working but we can clearly see this is not ideal specially when you think of some of the may be the crazy forms that you filled out that have 20 or 50 input boxes, its not gonna work great for me to have a seperate change function for each one of those and seperate piece of state for each one of those.
So next what we'll do is to combine our states into an object and how to use the event parameter that we're receiving in our event handlers to determine which property of that state object we should be updating.

3. 
export default function Form() {
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: ""}
    )
    
    console.log(formData)
    
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
            />
        </form>
    )
}

- if you do have two or three may be even four pieces of data in your form using something like making new state and function for each state can be managebale, but once you get to four or beyond it makes lot more sense to save your state in an object, instead of seperate variables firstName, lastName... 
the benefit of doing that is we're gonna receive one setter function which we're gonna learn how to use to update the correct piece of state in the object.
- I'll get rid of the extra function handleLastNameChange(event)
- and change the handleFirstName(event) to handleChange(event) to make it more universal.
- I'll change my onChange to {handleChange} so it works for both of them.
- we'll get rid of the extra state. and instead we're going to chose to save an object as our default value. and that object will have a firstname property as an empty string "" and lastName property as an empty string "" . const [firstName, lastName] = React.useState({firstName: "", lastName: ""})
- then i will change firstName to more generic like formData and setFormData
const [formData, setFormData] = React.useState({firstName: "", lastName: ""})
- if you remember back when we talked about the (event) that we're receiving in our handleChange event listener function , if you did spend sometime in developer tools poking that object and looking at its properties you probably saw event.target, and if i console.log(event.target) it would look like an html element, however under the hood it is really a DOM object that we can access properties on. infact we saw how i can look at the value property to get the specific value that was typed in to the input box,
console.log(event.target.value) , however at this point because its an object that we're saving in state,
i cant simply say setFormData to event.target.value because that would erase my object {firstName:"", lastName:""} with just a simple string. and because im using the same handleChange function on both of my inputs i need a way for the handleChange(event) to distinguish between which input it was that triggered that event. Well it turns out a good practice that we're neglecting to do right now is to give each of our inputs a name property, in react it plays an important role for us. What i can do is make the name property match exactly the property name in the state that we're saving.
and now i've access to event.target.name
function handleChange(event){
    console.log(event.target.name)
}
i will trigger the event to happen in the firstName property by clicking on the firstName box, and you can see it logs the firstName property there. and if i click on the lastName it logs lastName.
This is a great start we've access to the property of the state that we want to change {firstName:""}
"event.target.name", and we still have access to "event.target.value" which is the value "" that we want to change, so now we've everything we need to call setFormData and update our object correctly.
- Lets go ahead and call setFormData()
before when we were simply updating a string we didnt care about what the previous version of that string was , we were just overriding it with whatever was in the input box. this time around we do need to know what the old version of state was because we need to maintain instead of just overwrite.
- i will use a callback function , i will use an arrow function to call my previous state, i will use an arrow function and open up the body of that function and my goal is to return a new object and i need to make sure that i keep all of the old object intact, so im going spread out the previousFormData then im going to overwrite this specific property that we're trying to overwrite or we're trying to update in this handleChange event listener.
well on your first attempt your inclination might be to try something like this, lets use the event.target.name as key and event.target.value as the value, we can see in the editor its a syntax error.
However with es6 there is a feature introduced called "computed properties". and what this allows me to do is to surround me key here with square brackets [event.target.name] , long story short it makes me so i can turn a dynamic string like something saved in a variable and use it as a property name for my object. but that doesnt matter, you just have to know that you can fix the syntax problem by surrounding it with square brackets.
- now if i type in my firstName, my object will be updating correctly and same for the lastName.

4. challenge - add an email/field state to the form
- we simply need to add a field to our state object , we'll add an email property that says an empty string email: ""
- then i will add another input, i'll change the type to email, placeholder Email, i dont need to change my onChange event listener, i'll have to make sure the name property exactly matches the name that we chose in state.

5. Controlled inputs
- if you've read through the react forms documentation you'll have across a section called controlled components. When we're talking about maintaining state inside of a component there is a common concept called the single source of truth the idea is that the state that you're maintaining in your component should be the single source of truth, if you think back when we're learning about changing state and we had our boxes or squares example, one solution we came up with was allowing each box to take the incoming on prop and set its own internal state based on that incoming prop and then the box can change itself its internal state. The problem is we learned then is that we've two instances of that state that exists and dont necessarily match up, as there is not a single source of truth . 

The array of these objects [{on:true},{on:false},{on:true},{on:true}] was being held in state in the <App/> component, however each <Box/> component was then changing its state essentially without telling the <App/> that it was changing and therefore there was state the often times not match with one another.

we've a similar concept happening here, where in the markup inside our inputs each of these inputs, firstname, lastname, email is in effect is holding its own state, in this case we've two pieces of state, one is being held by the input box just in regular html and the other is updating by every key stroke in our react code React.useState({firstName:"", lastName:"", email:""}).
However a good practice in react is to make it so that your react state React.useState({firstName:"", lastName:"", email:""}), drives the state thats visible inside the input box. It might seem somewhat complicated to understand, but all it really boils down to is simply is adding a value property to inputs, value={formData.firstName} and formData and then the name of that specific input into that value.

visually we're not going to see any difference here but conceptually however when i type into the firstname Bob the value of this input box is no longer being controlled by the <input/> but rather react.
every change that i make runs my handleChange(event) function and updates the correct piece of state {firstName:"", lastName:"", email:""} , which rerenders my form and sets the value of my form input to be whatever state is. so now state is now in the drivers seat telling the input box what to display rather than the input box telling the state what to be.
The main reason to learn about controlled components is because sometimes if you dont set this up correctly react might sometimes complain about having uncontrolled components.