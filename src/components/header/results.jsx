import { useEffect, useState } from "react";
import CoinItem from "../coin_item";

function Results(props) {
  const [cryptoData, setCryptoData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setCryptoData(props.data);
    setSearchInput(props.search);
  }, [props.data, props.search]);

  const get_filtered_items = () => {
    if (!searchInput) {
      return cryptoData;
    } else {
      let filtered_data = cryptoData.filter((e) =>
        e.name.toLowerCase().includes(searchInput)
      );
      return filtered_data;
    }
  };

  const get_empty = () => {
    if (get_filtered_items() <= 0) {
        return <div className="empty">No crypto found</div>
    }
  }

  return (
    <>
      <div className="header_list search_results">
        {get_empty()}
        {get_filtered_items().map((data) => {
          return <CoinItem id={data.id} key={data.id}></CoinItem>;
        })}
      </div>
    </>
  );
}

export default Results;
