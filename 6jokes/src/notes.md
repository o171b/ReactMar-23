1. Conditional rendering &&
q. create a state `isShown` (boolean, default to `false`)
- at the top of my component i'll have my state called [isShown, setIsShown] = React.useState(false)
the default value will be false.

q. add a button that toggles the value back and forth
- then i'll add a button below props.punchline and have it say Show Punchline

q. Only display the punchline paragraph if `isShown` is true
- then we'll create a function that'll toggle our value back and forth, we'll name the function toggleShown , and all its going to do is setIsShown, we do need to know what the previous value of isShown was so i'll say (prevShown) and that way we can return the opposite of  prevShown (!prevShown) , i'll flip it from true to false or false to true.
Then we'll add our onClick event listener to run {toggleShown}
- we surround <p>{props.punchline}</p> with curly braces {<p>{props.punchline}</p>}
and that allows us to put a js expression in here , in that case we're going to say, if isShown is true
and "&&" this paragraph
- the double and percent && is used to show that both sides are true or truthy
{isShown && <p>{props.punchline}</p>} this is the final code

- {isShown && <button onClick={toggleShown}>Hide Punchline</button>}
  {!isShown && <button onClick={toggleShown}>Show Punchline</button>}
conditional rendering with show and hide buttons, when the punchline is shown it will display hide button and the opposite.
- same code using ternary operator
<button onClick={toggleShown}>{isShown ? "Hide" : "Shown"} Punchline </button>
the same code was written in one line using ternary operator
- as far as conditional rendering goes, probably 95% of the time, you will see conditional rendering handled with either the double and percent && or a ternary
the && is great if you either want something to display or not display and the ternary is great if you want to chose  between one of two things to display.
- if your conditions are more complex then just having one of two options to display, usually it will be best just to turn to regular old if statement.


other notes
- the initial value of React.useState(false) is false , so that the paragraph is not shown
if we turn it to true, the paragraph will be shown.


