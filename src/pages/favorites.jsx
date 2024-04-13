import { useLocalStorage } from "@uidotdev/usehooks"
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import CoinItem from '../components/coin_item'
import axios from 'axios';



function Favorites() {
    const [faveStore, saveFaveStore] = useLocalStorage("favorites",[])
    const [cryptoData, setCryptoData] = useState([])
    const navigate = useNavigate();


    useEffect(() =>{
        axios.get("https://api.coincap.io/v2/assets/")
        .then(response => {
          setCryptoData(response.data.data);
        })
        .catch(error => {
          console.error(error);
        })
      }, [faveStore]);

    const get_favorites_coins = ()=> {
      return cryptoData.filter((element) => faveStore.includes(element.id))
    };

    return (
    <div className="page_list">
        {get_favorites_coins()?.map((element) => {
            return <CoinItem detailed="true" key={element.id} id={element.id} price={element.priceUsd} change={element.changePercent24Hr}></CoinItem>
        })}
    </div>)
}

export default Favorites