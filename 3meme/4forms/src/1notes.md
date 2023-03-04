1. Forms are one of the difficult things to understand and one of the difficult things to use  in React.
Its one of the greatest weaknesses of React. Fortunately there is a plethora of awesome form libraries out there that many people end up turning to inorder to manage forms and not have to build everything that we're about to see and learn from scratch.
2. In the old days you would create a form in your html and you would give it an action, which had an url usually some kind of php file that would process your form. You would give it a  method usually POST and when your form was submitted through some Submit button, your php would pick everything up from there and process the data from that form.
eg:
<form 
            action="https://my-php-backend.com" 
            method="POST"
            id="my-form"
        >
            <label for="first-name">First Name: </label>
            <input 
                type="text" 
                id="first-name" 
                name="firstName" 
                class="input" 
            />
            <br />
            <label for="last-name">Last Name: </label>
            <input 
                type="text" 
                id="last-name" 
                name="lastName" 
                class="input" 
            />
            <br />
            <input type="submit" value="Submit" />
        </form>

Fastforward to really advanced JS and you would likely see something like this
eg:
document.getElementById("my-form").addEventListener("submit", function(event) {
    event.preventDefault()
    const formElements = event.target.elements
    const {firstName, lastName} = formElements
    submitViaAPI({
        firstName: firstName.value,
        lastName: lastName.value
    })
})

function submitViaAPI(data) {
    console.log(data)
    console.log("Submitted!")
}

- document.getElementById("my-form") , this selector goes and gets the form
- addEventListener("submit", function(event) {
    event.preventDefault()
it adds a submit event listener
-  event.preventDefault()
    const formElements = event.target.elements
    const {firstName, lastName} = formElements
    submitViaAPI({
        firstName: firstName.value,
        lastName: lastName.value
    })
})
and the function that runs whenever the form is submitted would gather all the values together and submit it to an api somehow.
 submitViaAPI({
        firstName: firstName.value,
        lastName: lastName.value
    })
})
- the main takeway here though is to know that when you're submitting the form it would gather all the data immediately at the very end of the process and submit it immediately after gathering it.

4. so how is this different from react?
- the main difference in react is , instead of waiting until the very end of the process and filling out the form when the form is submitted and then gathering the data instead what we do is we create state and every key stroke change or checkbox change or radio button change we update state and therefore we're watching these inputs every keystroke or every change thats made to our form. Then when the time  to submit comes and theres no more work to be done and that we've already gathered the data we simply submit that to our api and pass in the state that we've been tracking all along.
Coming up we'll jump into the specific syntax of how to do that, but its a good practice to read the react documentation on forms. 