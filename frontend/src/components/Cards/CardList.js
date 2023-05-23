import React, {useState, useEffect} from "react";
import CardInfo from './CardInfo';
import axios from 'axios';
import '../../styles/CardList.css';
import {ErrorAlert} from "../Alerts/ErrorAlert";
import {useAuth} from "../../utils/auth/UserContext";
import noData from '../../img/noData.jpg';


export default function CardList(props) {
    const [cardsData, setCardsData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')
    const [showError, setShowError] = useState(false)
    const [lastDeletedScholarship, setLastDeletedScholarship] = useState()
    const {user} = useAuth();

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const searchQuery = searchParams.get('search');

        axios.get(props.link, {
            params: {search: searchQuery}
        })
            .then(response => {
                setCardsData(response.data);
            })
            .catch((error) => {
                setShowError(true)
                setErrorMessage('Internal server error.')
                console.error(error);
            });

    }, [lastDeletedScholarship, props.link]);
    const onDeleteScholarship = (scholarship_id) => {
        axios.delete(`http://localhost:8080/wishList/deleteScholarshipFromWishList/${user.id}`, {
            data: {wish_list_item_scholarship_id: scholarship_id}
        }).then(() => {
            setLastDeletedScholarship(scholarship_id)
        }).catch((error) => {
            setShowError(true)
            setErrorMessage(error.response.data.message)
            console.log(error)
        })
    }

    return (
        <>
            <ErrorAlert showError={showError} setShowError={(bool) => setShowError(bool)} message={errorMessage}/>

            <div className="cards-container">
                {cardsData.length > 0 ? cardsData.map((data) => <CardInfo data={data} key={data.id}
                                                                          deleteButton={props.deleteButton}
                                                                          onDeleteScholarship={(scholarship_id) => onDeleteScholarship(scholarship_id)}
                    />) :
                    <img src={noData} alt={'no data'}/>}
            </div>
        </>
    );
}
