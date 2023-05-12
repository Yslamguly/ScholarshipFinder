import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Button from '@mui/material/Button';
import axios from 'axios';
import calender from '../img/icons/calendar.png';
import '../styles/detail.css';
import CardList from "../components/Cards/CardList";
import {useAuth} from "../utils/auth/UserContext";
import {ErrorAlert} from "../components/Alerts/ErrorAlert";
import {SuccessAlert} from "../components/Alerts/SuccessAlert";

export const CardDetails = () => {

    const [scholarshipById, setScholarshipById] = useState([]);
    const [showError,setShowError] = useState(false)
    const [showSuccess,setShowSuccess] = useState(false)
    const [alertMessage,setAlertMessage] = useState('')
    const [date, setDate] = useState();
    const {user} = useAuth()
    const {id} = useParams();

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

        axios.get(`http://localhost:8080/scholarship/${id}`)
            .then(response => {
                setScholarshipById(response.data);
                setDate(response.data.deadline_date.slice(0, 10));
            })
            .catch(error => {
                setShowError(true)
                setAlertMessage('Internal server error')
                console.error(error)
            });
    }, [])

    const onAddToWishListClick = (scholarship_id) =>{
        axios.post(`http://localhost:8080/wishList/addScholarshipToWishList/${user.id}`,{
            scholarship_id:scholarship_id
        }).then((response)=>{
            setShowSuccess(true)
            setAlertMessage(response.data.message)
        }).catch((err)=>{
            setShowError(true)
            setAlertMessage(err.response.data.message)
        })
    }
    return (
        <>
            <div className="scholarship">
                <img src={scholarshipById.image} alt="Scholarship"></img>
                <h1>{scholarshipById.title}</h1>
                <div className="deadline-container"><img src={calender} alt="Calendar-Icon"
                                                         className="calender-icon"></img> <h2>Deadline: {date}</h2>
                </div>
                <ErrorAlert showError={showError} message={alertMessage} setShowError={(bool) => setShowError(bool)}/>
                <SuccessAlert showSuccess={showSuccess} message={alertMessage} setShowSuccess={(bool)=>setShowSuccess(bool)}/>
                <p>{scholarshipById.description}</p>
                <div>
                    <Button sx={{width: "120px", height: "35px", margin: "1rem"}} variant="contained" type='button'>Apply
                        Now</Button>
                    {user ?
                        <Button x={{width: "120px", height: "35px", margin: "1rem"}} variant="contained" type='button' onClick={()=>onAddToWishListClick(scholarshipById.id)}>Add
                            to wish list</Button>
                        : null}
                </div>
            </div>
            <div>
                <h1 style={{textAlign: 'center', marginBottom: 30}}> Find Other Scholarships</h1>
                <div>
                    <CardList link={'http://localhost:8080/scholarship/getRandomScholarships'}/>
                </div>
            </div>
        </>
    );
}
