/**
     * Challenge:
     * 1. Every time the `notes` array changes, save it 
     *    in localStorage. You'll need to use JSON.stringify()
     *    to turn the array into a string to save in localStorage.
     * 2. When the app first loads, initialize the notes state
     *    with the notes saved in localStorage. You'll need to
     *    use JSON.parse() to turn the stringified array back
     *    into a real JS array.
     */
      const [notes, setNotes] = React.useState(
      JSON.parse(localStorage.getItem("notes")) || [])
    
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )

- # 1. we do that with React.useEffect , so, everytime the notes array changes i want to use localStorage.setItem because i'll be update notes key inside of local storage and i can use JSON.stringify to stringify the notes so that my array can be turned into a string successfully saved to local storage the second parameter is [notes] as i want it to run everytime notes array changes.
- localStorage takes two values "key" and value , we named "key" here as "notes"
===================================================
/**
challenge
lazily initialize our `notes` state so it doesnt reach into local storage on every single re-render of the App component
**/
- lazy state initialization
 const [state, setState] = React.useState(console.log("State initialization"))

the below code is lazy state initialization
 const [state,setState] = React.useState(
      () => console.log("state initialization")
    )
this is useful because we dont want our state to be updated even if we type a single letter in the notes app,
if state changes even if typing a single letter in our notes app, that can be expensive for our browser.
so instead of returning a value we will return a function.
"i make a change in notes app, but the change i make dont rerun the code"

so we put the function in our local storage code which lazily initializes our notes
const [notes, setNotes] = React.useState(
     () => JSON.parse(localStorage.getItem("notes")) || [])

==================================

/**
     * Challenge: Try to figure out a way to display only the 
     * first line of note.body as the note summary in the
     * sidebar.
     * 
     * Hint 1: note.body has "invisible" newline characters
     * in the text every time there's a new line shown. E.g.
     * the text in Note 1 is:
     * "# Note summary\n\nBeginning of the note"
     * 
     * Hint 2: See if you can split the string into an array
     * using the "\n" newline character as the divider
     */

- in App.js change this line
React.useEffect(() => {
      localStorage.setItem("notes", JSON.stringify(notes))
      console.log(notes[0].body.split("\n"))
    }, [notes])
- you can remove console.log part as the code is already added in sideBar.js

- in Sidebar.js change this line
<h4 className="text-snippet">{note.body.split("\n")[0]}</h4>


=============================

/**
     * Challenge: When the user edits a note, reposition
     * it in the list of notes to the top of the list
     */

function updateNote(text) {
        setNotes(oldNotes => oldNotes.map(oldNote => {
            return oldNote.id === currentNoteId
                ? { ...oldNote, body: text }
                : oldNote
        }))
    }
- initially we're using .map method, that returns the original array, so even if we modify one of our notes
say for example note number 20, it will be returned as number 20 in the list of our notes, but what we want to achieve is that when we edit the note number 20 , we want it to be put as the first note instead.
function updateNote(text) {
        // Try to rearrange the most recently-modified
        // not to be at the top
        setNotes(oldNotes => {
            const newArray = []
            for(let i = 0; i < oldNotes.length; i++) {
                const oldNote = oldNotes[i]
                if(oldNote.id === currentNoteId) {
                    newArray.unshift({ ...oldNote, body: text })
                } else {
                    newArray.push(oldNote)
                }
            }
            return newArray
        })

==================================

   /**
     * Challenge: complete and implement the deleteNote function
     * 
     * Hints: 
     * 1. What array method can be used to return a new
     *    array that has filtered out an item based 
     *    on a condition?
     * 2. Notice the parameters being based to the function
     *    and think about how both of those parameters
     *    can be passed in during the onClick event handler
     */

     