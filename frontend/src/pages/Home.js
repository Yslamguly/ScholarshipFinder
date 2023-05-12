import React from "react";
import Landing from '../components/Landing';
import CardList from "../components/Cards/CardList";

export const Home = () =>{
    return (
        <>
        <Landing />
        <div>
        <h1 style={{ textAlign: 'center',marginTop:'30px', marginBottom:'30px' }}>The Latest Scholarships</h1>
        </div>
        <CardList link={'http://localhost:8080/scholarship'} deleteButton={false}/>
        </>
      );
}
