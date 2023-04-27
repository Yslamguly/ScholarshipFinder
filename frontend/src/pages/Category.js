import { useState } from "react";
import React from "react";
import CardList from "../components/Cards/CardList";

export const Category = (props) =>{

  const [length, setLength] = useState(0);
  
    return (
        <>
        <div>
        <h1 style={{ textAlign: 'center',marginTop:'30px', marginBottom:'30px' }}>{length} {props.category} Scholarships </h1>
        </div>
        <CardList link={`http://localhost:8080/scholarship/category/${props.id}`} setLength={(length)=>setLength(length)}/>
        </>
      );
}