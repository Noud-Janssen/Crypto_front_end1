import { useEffect, useState } from "react";
import CoinItem from "./coin_item";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Link } from 'react-router-dom'

function RecentCompact() {
  const [recentStore, saveResentStore] = useLocalStorage("recent", []);

  const empty_recents = () => {
    if (recentStore.length == 0) {
      return <div className="empty">No recent<br/>coins found</div>
    } else {
      return <></>
    }
  }

  const get_last = () => {
    return recentStore.slice(recentStore.length - 4,recentStore.length);
  }

  return (
    <div className="favoritesCompact">
      <h1>Recent:</h1>
      {empty_recents()}
      {get_last().map((favorite) => {
        return <CoinItem key={favorite} id={favorite}></CoinItem>;
      })}
    </div>
  );
}

export default RecentCompact;
