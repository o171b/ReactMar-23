import React from "react"
import dubai from "../src/images/dubai.jpg"
import pin from "../src/images/pin.png"


export default function Card(props){
    return(
        <div className="card">
            <img src={props.imageUrl} alt="fiji" className="image"></img>
            <img src={pin} alt="locationpin" className="location--pin"></img>
            <bold className="city">{props.location}</bold>
            <bold className="city--area">{props.title}</bold>
            <h1 className="visit--date">{props.startDate}</h1>
            <h1 className="end--date">{props.endDate}</h1>
            <h1 className="description">{props.description}</h1>

            
            </div>
    )
}