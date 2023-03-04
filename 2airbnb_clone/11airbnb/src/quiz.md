1. what does the '.map()' araray method do ?
it returns a new array. Whatever gets returned from the callback
function provided is place at the same index in the new array.
Usually we take the items from the original array and modify them
in some way.

2. What do we usually use `.map()' for in React?
To convert an array of raw data into an array of JSX elements
that can be displayed on the page

3. Why is using '.map()' better than just creating the components
manually by typing them out?
It makes our code more 'self-sustaining] - not requiring
additional changes whenever the data changes.
think of a c syle for loop say something like for(let i=0;i < array.length; i++){}
this makes it so that the if the length of the array ever were to change our for loop,
would not require intervention instead it would automatically check the length of the array.
alternatively if i said something like "i<5" but im looking through the elements of an array
may be now has 10 elements, my for loop is broken and requires intervention from a programmer.
eg: in amazon.com we have a list of products, the programmer dont have to each time fill,
in the details of each product manually