# 1. useEffect() syntax and default behaviour
- just as we can access the useState() hook on top of the react object, we can do the same with useEffect().
so i can create a side effect by React.useEffect() . useEffect() has one required parameter and an optional second parameter, for now we'll learn about the first required parameter and then we'll see the second optional parameter.
- Required first parameter for react.useEffect is a callback function 
`React.useEffect(function(){ })`
and this function acts as a place for us to be able to put our side effects code , in this API eg the fetch request is considered a side effect and thats because its reaching outside of react ecosystem but also trying to set some state `setStarWarsData(data)` in the process. Remember this was inifintely looping because on the top level of our component it was running this fetch and setting the starwars data which was modifying state `setStarWarsData]=React.useState()..` and therefore rerendering the app which then ran all the code again in this infinite loop
- the side effect lives inside of the useEffect() hook. 
`useEffect(){sideeffect}`
- when we console.log("component rendered") we'll still get an infinite loop. thats because the API code that we put in the callback function , if we dont provide a second parameter to it then there's almost no difference between putting our code inside of useEffect() and putting it ouside of useEffect on the top level of our component.