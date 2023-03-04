1. Text Area
-   challenge : add a textarea for "comments" to the form
-   make sure to update state when it changes
==========================================================
2. Checkbox
- checkboxes arent an html element on its own, they are an input element with a type of "checkbox".
checkboxes are fundamentally different than what we've been working with so far with our text inputs because they just hold boolean value, in other words theres not going to be some kind of string text for my checkbox instead there is a checked property that will either be true or false based on whether the user has checked the box or not.
- when we maintain a checkbox in a state, because its a checkbox we're not maintaining a string.
in the state we'll add isFriendly property and because checkboxes have boolean values, we'll initially give it a true value.
- to associate our state isFriendly with our checkbox we're not going to use something like a value property but instead we're going to use a checked property.

- we're going to make some modifications in our handleChange(event) handle change function.
- a much better way is to destructure event.target and pull out the values that we need
const {name,value} = event.target
so we need name and value from event.target.
and then i can switch this [event.target.name] : event.target.value
to [name] : value.
- when we're handling a checkbox there's a few things we need to pass in, one property that will come in is this type property. we've a type text, email and our type of checkbox.
so lets bring in that type const{name,value,type} so we can check whether or not the input thats making this handleChange() run is a type of checkbox and if it is we're also going to need the checked property, and this is either going to be true or false depending on how the user has interacted with the checkbox.
- i will use a ternary [name]: type=== "checkbox" ? checked : value
is type equal to checkbox if so i want you to use the check property but if not i want you to use the value property.
==========================================================
3. Radio Buttons
- first we need a place in state to hold all of this information. i will add another property to state called employment:
- we'll give it a name property as employment, so that when we click our radio buttons only one is clicked
- each one of these inputs will have its own unique value and this value is what will actually get saved as a value in state when this specific input is selected
so for unemployed we'll have value="unemployed" , part-time value="part-time", full-time value="full-time".
- next i need to make sure that im listening to change events so i will add my onChange{handleChange}
technically speaking this now should be hooked up correctly to state.
- when we're controlling the checked property in radio buttons we dont simply say checked={formData.employment} just as in checkboxes, because unlike a checkbox this is not a boolean value, but we can make it a boolean value by checked = {formData.employment === "employed"}.
after doing this react is incharge of controlling this input rather than the input having its own html state.
- this is how it works, initially the value of formData.employment is an empty string "", when i clicked unemployed it runs onChange={handleChange} which we've defined in function handleChange() , we're pulling in that function the name,value,type and checked , we're setting the formData setFormData, bringing in all the formData ...prevFormData, then we're using [name] which we had set to employment as the key for the state that we're updating and it looks at === "checkbox" is the type checkbox, in reality no this is not a checkbox , this is a radio so it skips the checked value ? checked and instead uses this value : value.
this value is the value we've defined in the input value="employed".
then when we change state react rerenders our form it checks if the current selected formData.employment === "unemployed" then that becomes a true statement if we chose it and all of these other checks part-time and full-time are false, that makes it that only one of these are checked in any given time.

=====================================================

4. Select Box
- lets add favColor:"" in state
- then down here in our select we'll say value={formData.favColor}
- we can use the same onChange={handleChange}
- now if we console.log(formData.favColor) when we select any color we'll see it get consoled.

==========================================================

5. Submitting the Form
- we're going to setup the onSubmit event handler, lets create a function called handleSubmit(event)
and run event.preventDefault() inside the function body , preventing the default means that it wont refresh our page and essentially rerender our app with all of these default values of state firstName,lastName,email etc .

===============================================================

6. Signup form practice
- /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */

1A. im gonna start with some state const[formData,setFormDa]... and im gonna provide this object some default values. then we'll add each of these properties as a name input.
then im going to add an onChange={handleChange} for everyone of them thats going to point to a function called handleChange(event) .
Then am gonna add a a value property to each one of them except for checkbox it should be checked.

2A. then we'll create our handleChange(event), from the event im going to pull out the name,value,type and the checked properties and we'll get all of them from = event.target .
Then i can run my setFormData(prevFormData) and i need to access my previous Form Data and this will be a parameter to my callback function => , then i'll be returning an object and that object should have all of the properties of the previous form data ...prevFormData, but then i want to update the property based on the name value that i pulled from the input that's making this change [name] : type === "checkbox" ? checked : value , we're using the ternary if else because we have two types of properties in our form, one is a checkbox and the other value.

3A. In handleSubmit(event) function the first thing we add is event.preventDefault() so while submitting our form the page doesnt get refreshed, next if the password and confirmation match each other then i can say if(formData.password === formData.passwordConfirm) then console.log("successfully signed up") else console.log("password does not match")
then for the newletter we say if (formData.joinedNewsLetter){
    console.log("Thanks for signing up for our newsletter")
}