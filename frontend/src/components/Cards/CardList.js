import React,{useState, useEffect} from "react";
import CardInfo from '../Cards/Card';
import axios from 'axios';
import '../../styles/CardList.css';


export default function CardList() {
    const [CardsData,setCardsData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/scholarship')
        .then(response => {
      // Handle the successful response from the server
      console.log(response.data[0]);
      setCardsData(response.data);
        })
        .catch(error => {
      // Handle any errors that occur during the request
      console.error(error);
        });

    },[])
    

  return (
    <div className="cards-container">
      {CardsData.map((data) => <CardInfo data={data}/>)}
    </div>
  );
}
