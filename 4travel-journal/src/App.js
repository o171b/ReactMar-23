import React from "react"
import Navbar from "./Navbar"
import './style.css'
import Card from "./Card"
import data from "./data"

export default function App(){
  const cards = data.map(item => {
      return  (
          <Card
              //item={item}
              {...item}
              />
      )
  })

return (
  <div>
<Navbar />
<section className="cards-list">
  {cards}
</section>
  </div>
)}