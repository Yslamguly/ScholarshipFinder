import {useAuth} from "../utils/auth/UserContext";
import React, {useEffect, useState} from "react";
import CardList from "../components/Cards/CardList";

export const WishList = () => {
    const {user} = useAuth();

    return (
        <div>
            <h1>{user.name}'s Wish list</h1>
            <CardList link={`http://localhost:8080/wishList/getWishList/${user.id}`} deleteButton={true}/>
        </div>
    )
}
