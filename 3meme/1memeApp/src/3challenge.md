/**
     * Challenge: 
     * 1. Set up the text inputs to save to
     *    the `topText` and `bottomText` state variables.
     * 2. Replace the hard-coded text on the image with
     *    the text being saved to state.
     */

1A. I'll add a name property to each input name="topText"
and name="bottomText"
next we'll add our value property so these can be controlled components and those will be 
value={meme.topText} and value={meme.bottomText} and then we're going to need an event handler onChange={handleChange} and then we'll create that function function handleChange(event) am gonna pull in the event so that i can get the name and value properties
- lastly i'll update my hardcoded text to look at our object values and state so this will be meme.topText and meme.bottomText

==================================================================


