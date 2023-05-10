import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import axios from 'axios';
import calender from '../img/icons/calendar.png';
import '../styles/detail.css';
import CardList from "../components/Cards/CardList";

export const CardDetails = () =>{

  const[scholarshipById, setScholarshipById] = useState([]);
  const { id } = useParams();
  const [date, setDate] = useState();

  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

    axios.get(`http://localhost:8080/scholarship/${id}`)
    .then(response => {
    // Handle the successful response from the server
      console.log(response.data);
      setScholarshipById(response.data);
      setDate(response.data.deadline_date.slice(0,10));
      })
    .catch(error => {
    // Handle any errors that occur during the request
      console.error(error);
      });
  },[])
    return (
      <>
        <div className="scholarship">
          <img src={scholarshipById.image} alt="Scholarship"></img>
          <h1>{scholarshipById.title}</h1>
          <div className="deadline-container"><img src={calender} alt="Calendar-Icon" className="calender-icon"></img> <h2>Deadline: {date}</h2></div>
          <p>{scholarshipById.description}</p>
          <Button sx={{ width: "120px", height: "35px" }} variant="contained" type='button'>Apply Now</Button>
        </div>
        <div>
          <h1 style={{textAlign:'center', marginBottom:30}}> Find Other Scholarships</h1>
          <div>
            <CardList link={'http://localhost:8080/scholarship/getRandomScholarships'}/>
          </div>
        </div>
      </>
      );
}
