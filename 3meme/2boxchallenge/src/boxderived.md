this is the code for box derived

App.js
import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    const squareElements = squares.map(square => (
        <Box key={square.id} on={square.on} />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}

Box.js
import React from "react"

export default function Box(props) {
    const [on, setOn] = React.useState(props.on)
    
    const styles = {
        backgroundColor: on ? "#222222" : "transparent"
    }
    
    function toggle() {
        setOn(prevOn => !prevOn)
    }
    
    return (
        <div style={styles} className="box" onClick={toggle}></div>
    )
}

boxes.js
export default [
    {
        id: 1,
        on: true
    },   
    {
        id: 2,
        on: false
    },   
    {
        id: 3,
        on: true
    },   
    {
        id: 4,
        on: true
    },   
    {
        id: 5,
        on: false
    },   
    {
        id: 6,
        on: false
    },   
]

index.html
<html>
    <head>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div id="root"></div>
        <script src="index.pack.js"></script>
    </body>
</html>

index.js
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"))

style.css
* {
    box-sizing: border-box;
}

.box {
    height: 100px;
    width: 100px;
    border: 1px solid black;
    display: inline-block;
    margin-right: 4px;
    border-radius: 5px;
}