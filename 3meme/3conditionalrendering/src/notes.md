challenge
1. if there are no unread messages, display "you're all caught up"
2. if there are > 0 unread messages, display "you've <n> unread message(s)
3. if there is exactly 1 unread message, it should read "message" (singular)


- <h1> You have {messages.length} unread message{messages.length > 1 && "s"} </h1>
this is another way of using conditional rendering
just  like in react there are multiple ways of using conditional rendering , react is just js
you can solve the same problem in multiple ways

==================================
Q & A
1. What is conditional rendering?
A. When we want to only sometimes display something on the page based on a condition of  some sort.

2. When would you use &&?
A. When we want to either display something or Not display it.

3. When would you use ternary?
A. when you need to decide which thing among 2 options to display.

4. What if you need to decide between > 2 options on what to display?
A. Use an `if...else if...else` conditional or `switch` statement.

eg: function App(){
    let someVar
    if(){
        someVar = <someJSX />
        } else if(){

        }else{

        }
        return {
            <div>{someVar}</div>
        }
    }
}