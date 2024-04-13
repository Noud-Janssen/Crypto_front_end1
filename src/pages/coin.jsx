import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { useAsyncError, useNavigate, useParams } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

function Coin() {
  const [cryptoData, setCryptoData] = useState([]);
  const [cryptoHistory, setCryptoHistory] = useState([]);
  const [graphMax, setGraphMax] = useState(0);
  const navigate = useNavigate();
  const [recentStore, saveRecentStore] = useLocalStorage("recent", []);

  const { id } = useParams();

  useEffect(() => {
    if (recentStore[recentStore.length - 1] != id) {
      recentStore.push(id);
      saveRecentStore(recentStore);
    }
  }, [window.location.href]);

  useEffect(() => {
    axios
      .get("https://api.coincap.io/v2/assets/" + id)
      .then((response) => {
        setCryptoData(response.data.data);
        if (response.status !== 200) {
        }
      })
      .catch((error) => {
        console.error(error);
        return navigate("/404");
      });
  }, [id]);

  useEffect(() => {
    axios
      .get("https://api.coincap.io/v2/assets/" + id + "/history?interval=d1")
      .then((response) => {
        setCryptoHistory(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = cryptoHistory.map((element) => element.date.substring(0, 9));

  const data = {
    labels,
    datasets: [
      {
        label: "Price (United States Dollar)",
        data: cryptoHistory.map((element) => element.priceUsd),
        borderColor: "rgb(224, 54, 22)",
        backgroundColor: "rgb(224, 54, 22)",
      },
      // {
      //   label: 'Dataset 2',
      //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      //   borderColor: 'rgb(53, 162, 235)',
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
      // },
    ],
  };

  return (
    <>
      <div className="main_container">
        <div className="coin_page">
          <h1>{cryptoData.name}</h1>
          <Line options={options} data={data} />

          <div className="detail_item">
            <h3>Price:</h3>
            <h3>${Math.round(cryptoData.priceUsd * 1000000) / 1000000}</h3>
          </div>
          <div className="detail_item">
            <h3>Market cap:</h3>
            <h3>${Math.round(cryptoData.marketCapUsd * 1000000) / 1000000}</h3>
          </div>
          <div className="detail_item">
            <h3>
              Price change:<br></br>(last 24 hours)
            </h3>
            <h3>{cryptoData.changePercent24Hr}%</h3>
          </div>
          <div className="detail_item">
            <h3>Supply:</h3>
            <h3>{Math.round(cryptoData.supply)}</h3>
          </div>
          <div className="detail_item">
            <h3>Max supply:</h3>
            <h3>{Math.round(cryptoData.maxSupply)}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coin;
