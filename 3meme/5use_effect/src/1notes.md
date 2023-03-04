1. Side effects

# to really understand lets take a look at what reacts primary tasks are
a. react is incharge of working with the DOM in the browser to render some kind of UI to the page.
the react team has created a really simple interface to allow the developers to accomplish this with JSX and elements that look just like html, under the hood ofcourse react is taking that JSX and turning it into elements that can be displayed on the page.
b. Manage state for us between render cycles , in other words React can remember state values from one render to the next.
c. keep the UI updated whenever state changes occur

# What React cant handle?
- any kind of side effects or i put out(side) effects here. All that really means is anything that lives outside of Reacts reach , some eg's of this are
    - localstorage on your own browser for eg, we can ofcourse use code to access localstorage but react has no real hand in interfacing with local storage.
    - API/database interactions that occur in our code we can write that code to interact with API's but react is not incharge of that code, or rather react has no way to know which API's we're going to be reaching out to.
    - Subscriptions(e.g. web sockets) Similarly any kind of subscriptions you might have, if you include websocket in your application for eg: you have a chat application that updates live .
    - Syncing two different internal states together
    - in the end it basically boils down to anything react isn't incharge of can be considered a side effect.