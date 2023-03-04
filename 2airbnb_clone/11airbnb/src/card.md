<img src={require(`.././images/${props.img}`)} alt="cardimages"  className="card--image" />,
was stuck in the image properties for two hours and this line of code solved it, what i assume
is that the wrong picture directory caused the problem 


With props
1. we're receiving props in our card component
2. <img src={`../images/${props.img}`} -this is probably the trickiest part in the 
challenge which is string interpolation which is a js concept, in the return line we're
in js then in div line we jump back to JSX and then with the curly braces we jump back to js,
inside js and inside template strings i can use dollar sign and curly braces to insert,
js value into the string and its called interpolation.
3. If you are using webpack, you need to use require while mentioning the src for img tag,
if you dont use require the image wont display.
4. now we've a reusable component as long as everytime i create an instance of my,
card i pass in the props in the card component i should be able to get different cards in,
mylist

- require - The require() function is a Node. js function that is used to include external 
modules from files other than the current file. It works in the same way as the import statement 
and allows us to include images: let Logo = require('./images/react-logo.

5. export default function Card(props) {
    let badgeText --here we're using js
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.openSpots > 0) {
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>} 
            here badgeText is a truthy value

6. now to clean up our code we dont need all these individual card props
    <Card
                key = {item.id}
                img = {item.coverImg}
                rating = {item.stats.rating}
                reviewCount = {item.stats.reviewCount}
                country = {item.location}
                title = {item.title}
                price = {item.price}
                openSpots = {item.openSpots}
                />
                instead we can pass an entire object inside a component
                <Card
                item={item}
                />
along the theme of react being just js instead of passing each of these props
of our data individually we can just give this component item the entire {item} object , we kept
key there because its something unique.
- we can also instead of creating my own prop item that i pass the entire object down through,
what i can actually do just put a set of curly braces and spread the item into my components props
{...item}(spread syntax), essentially what it does is, it takes the properties of the data such as id, title, description etc and creates a seperate prop for each one of them just like we had before .
so when you use the spread syntax, you don't have to explictly add item to the props,
eg : one of our props is item.location, so instead of props.item.location we can just code
props.location and it will work with spread syntax