import {useAuth} from "../utils/auth/UserContext";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {ErrorAlert} from "../components/Alerts/ErrorAlert";
import CardList from "../components/Cards/CardList";
import CardInfo from "../components/Cards/Card";

export const WishList = () => {
    const {user} = useAuth();
    const [scholarships, setScholarships] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [showError, setShowError] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8080/wishList/getWishList/${user.id}`)
            .then((response) => {
                setScholarships(response.data)
            })
            .catch((err) => {
                    console.log(err)
                    setShowError(true)
                    setErrorMessage('Internal server error.')
                }
            )
    }, [])

    return (
        <div>
            <ErrorAlert showError={showError} setShowError={(bool) => setShowError(bool)} message={errorMessage}/>
            <h1>{user.name}'s Wish list</h1>

            {scholarships.map((data)=>(
                <CardInfo data={data}/>
            ))}
        </div>
    )
}
