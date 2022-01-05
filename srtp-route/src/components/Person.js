import React from 'react'
import { useParams } from "react-router-dom";

export default function Person({data})  {
    const {personId} = useParams();
    const person = data.find(p=>p.id===Number(personId))
    let personData;
    if(person){
        personData = (
            <div><h3>{person.id}</h3>
            <p>{person.name}</p>
            <p>{person.status}</p></div>
        )
    } else {
        personData =  <h2>Sorry Person not fount</h2>
    }
    return (
        <div>
            <div>{person.data}</div>
        </div>
    )
}
