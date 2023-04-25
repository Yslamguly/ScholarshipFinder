import React from "react";
import CardList from "../components/Cards/CardList";

export const Category = (props) =>{
    return (
        <>
        <div>
        <h1 style={{ textAlign: 'center',marginTop:'30px', marginBottom:'30px' }}>100 {props.category} Scholarships </h1>
        </div>
        <CardList link={''}/>
        </>
      );
}