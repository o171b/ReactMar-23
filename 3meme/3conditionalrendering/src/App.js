import React from "react"

export default function App(){
  const [messages, setMessages] = React.useState (["a","b"])


  return (
    <div>
        {
          messages.length === 0 ?
          <h1>You're All caught up</h1> :
          <h1>You've {messages.length} unread {messages.length > 1 ?
            "messages" : "message"}</h1>
        }
    </div>
  )
}