import React, {useState, useEffect} from "react";
import CardInfo from './CardInfo';
import axios from 'axios';
import '../../styles/CardList.css';
import {ErrorAlert} from "../Alerts/ErrorAlert";
import {useAuth} from "../../utils/auth/UserContext";


export default function CardList(props) {
    const [cardsData, setCardsData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')
    const [showError, setShowError] = useState(false)
    const [lastDeletedScholarship, setLastDeletedScholarship] = useState()
    const {user} = useAuth();

    useEffect(() => {
        axios.get(props.link)
            .then(response => {
                console.log(response.data);
                setCardsData(response.data);
            })
            .catch((error) => {
                setShowError(true)
                setErrorMessage('Internal server error.')
                console.error(error);
            });

    }, [lastDeletedScholarship])
    const onDeleteScholarship = (scholarship_id, index) => {
        axios.delete(`http://localhost:8080/wishList/deleteScholarshipFromWishList/${user.id}`, {
            data: {wish_list_item_scholarship_id: scholarship_id}
        }).then((response) => {
            setLastDeletedScholarship(scholarship_id)
            console.log(response)
        }).catch((error)=>{
            setShowError(true)
            setErrorMessage(error.response.data.message)
            console.log(error)
        })
    }

    return (
        <>
            <ErrorAlert showError={showError} setShowError={(bool) => setShowError(bool)} message={errorMessage}/>

            <div className="cards-container">
                {cardsData.length > 0 ? cardsData.map((data,index) => <CardInfo data={data} key={data.id}
                                                                          deleteButton={props.deleteButton}
                                                                                onDeleteScholarship={(scholarship_id)=>onDeleteScholarship(scholarship_id)}
                    />) :
                    <h1>No items found</h1>}
                {/*Instead of "No items found" there should be an svg or something like that*/}
            </div>
        </>
    );
}
