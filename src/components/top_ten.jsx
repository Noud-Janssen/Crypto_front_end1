import { Pie } from "react-chartjs-2";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import CoinItem from "./coin_item";

function Top_Ten() {
  const [cryptoData, setCryptoData] = useState([]);
  const [topTenState, setTopTenState] = useState("cap");

  useEffect(() => {
    axios
      .get("https://api.coincap.io/v2/assets")
      .then((response) => {
        setCryptoData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const top_ten_cap = () => {
    setTopTenState("cap");
  };
  const top_ten_price = () => {
    setTopTenState("price");
  };
  const top_ten_rise = () => {
    setTopTenState("rise");
  };

  const get_top_by_rank = (i) => {
    switch (topTenState) {
      case "cap":
        return cryptoData
          .sort((a, b) => b.marketCapUsd - a.marketCapUsd)
          .slice(0, i);
      case "price":
        return cryptoData.sort((a, b) => b.priceUsd - a.priceUsd).slice(0, i);
      case "rise":
        return cryptoData
          .sort((a, b) => b.changePercent24Hr - a.changePercent24Hr)
          .slice(0, i);
      default:
        break;
    }
  };

  const data = {
    labels: get_top_by_rank(10).map((data) => {
      return data.name;
    }),
    datasets: [
      {
        label: topTenState,
        data: get_top_by_rank(10).map((data) => {
          switch (topTenState) {
            case "cap":
              return data.marketCapUsd;
            case "price":
              return data.priceUsd;
            case "rise":
              return data.changePercent24Hr;
          }
          return data.rank;
        }),
        backgroundColor: get_top_by_rank(10).map((data) => {
          return (
            "rgb(" +
            Math.floor(Math.random() * 255).toString() +
            "," +
            Math.floor(Math.random() * 255).toString() +
            "," +
            Math.floor(Math.random() * 255).toString() +
            ")"
          );
        }),

        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="top_ten_container">
      <div className="graph">
        <Pie data={data} />
      </div>
      <div className="top_ten">
        <h1>Top 10</h1>
        <div data-testid="test_result_select" className={"button_row " + topTenState}>
          <button data-testid="top_ten_market_cap" onClick={top_ten_cap}>Market Cap</button>
          <button data-testid="top_ten_price" onClick={top_ten_price}>Price</button>
          <button data-testid="top_ten_rise" onClick={top_ten_rise}>Change</button>
        </div>
        {get_top_by_rank(10).map((data) => {
          let t;
          switch (topTenState) {
            case "cap":
              t = "$" + Math.round(data.marketCapUsd / 1000000) + " 10^6";
              break;
            case "price":
              t = "$" + Math.round(data.priceUsd * 100) / 100;
              break;
            case "rise":
              t = Math.round(data.changePercent24Hr) + "%";
              break;
          }
          return <CoinItem data-testid={data.id} key={data.id} id={data.id}></CoinItem>;
        })}
      </div>
    </div>
  );
}

export default Top_Ten;
