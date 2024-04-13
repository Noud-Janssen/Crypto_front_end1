import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import CoinItem from "../coin_item";
import axios from "axios";
import "../../App.css";

import FavoritesCompact from "./favoriteCompact";
import RecentCompact from "../recent";
import Results from "./results";

function Header() {
  const [input, setInput] = useState("");
  const [cryptoData, setCryptoData] = useState([]);
  const [crumbs, setCrumbs] = useState([]);
  const [link, setLink] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    axios
      .get("https://api.coincap.io/v2/assets")
      .then((response) => {
        setCryptoData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [window.location.pathname]);

  useEffect(() => {
    let url = window.location.pathname.substring(1);
    if (url.length !== 0) {
      setCrumbs(url.split("/"));
    } else {
      setCrumbs([]);
    }
  }, [window.location.pathname]);

  const navigate = useNavigate();

  const search = (event) => {
    if (event.key === "Enter") {
      let result = get_filter_items()[0];
      if (result) {
        inputRef.current.blur();
        return navigate("/" + result.id);
      }
    }
    return;
  };

  const get_filter_items = () => {
    if (!input) {
      return cryptoData;
    } else {
      let filtered_data = cryptoData.filter((e) =>
        e.name.toLowerCase().includes(input)
      );
      return filtered_data;
    }
  };

  return (
    <header>
      <h1 id="main_h1">CoinBits</h1>
      <Link to={"/"}>Home</Link>
      <div className="search_bar">
        <h2>&#60;</h2>
        <input
          type="text"
          ref={inputRef}
          name="search_bar"
          id="search_bar"
          onKeyDown={search}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="search"
        />
        <h2>&#62;</h2>
      </div>

      <Results search={input} data={cryptoData} />
      <FavoritesCompact />
    </header>
  );
}

export default Header;
