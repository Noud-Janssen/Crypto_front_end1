import { useEffect, useState } from "react";
import CoinItem from "../coin_item";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";

function FavoritesCompact() {
  const [favStore, saveFavStore] = useLocalStorage("favorites", []);

  const empty_favorites = () => {
    if (favStore.length == 0) {
      return <div className="empty">No favorites</div>;
    } else {
      return <></>;
    }
  };

  const get_max = () => {
    let result = favStore.slice(0, 4);
    return result;
  };

  return (
    <>
      <h1>Favorites:</h1>
      <div className="favoritesCompact header_list">
        {empty_favorites()}
        {favStore.map((favorite) => {
          return <CoinItem key={favorite} id={favorite}></CoinItem>;
        })}
      </div>
    </>
  );
}

export default FavoritesCompact;
