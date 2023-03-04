1. What is a "side effect" in React? What are some examples?
- Any code that affects an outside system.
- local storage, API, websockets, two states to keep in sync


2. What is NOT a "side effect" in React? Examples?
- Anything that React is in charge of.
- Maintaining state, keeping the UI in sync with the data, 
  render DOM elements


3. When does React run your useEffect function? When does it NOT run
   the effect function?
- As soon as the component loads (first render)
- On every re-render of the component (assuming no dependencies array)
- Will NOT run the effect when the values of the dependencies in the
  array stay the same between renders


4. How would you explain what the "dependecies array" is?
- Second paramter to the useEffect function
- A way for React to know whether it should re-run the effect function

5. What SHOULD be in our dependencies array in this case?
React.useEffect(function() {
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])
- We can see that our code is not making use of count. Usually what you put in a dependencies array will also show up somewhere in the function, but right now we're not using count to determine how this function runs at all, you might think looking at the function [starWarsData] , but if i put starWarsData and setStarWarsData inside the body of the function im going to get an infinite loop again, because if i setStarWarsData its going to change [starWarsData] and its going to rerender the app which will then run or effect and will end up in that same loop.
Assuming that i want this api request to happen when the app first loads if i leave this empty [] because there are no dependencies for this to run then i can successfully setup my effect so that it would just run api request on the very first render of our component.