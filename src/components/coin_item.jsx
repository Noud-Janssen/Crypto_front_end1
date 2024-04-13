import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function CoinItem(props) {
  
  if (!props.id) {
    return <></>
  }

  const [isFavorite, setIsFavorite] = useState(false);
  const [svg, setSvg] = useState("/favorite.svg");
  const [favStore, saveFavStore] = useLocalStorage("favorites", []);

  const capitalize = (s) => {
    let result = s.toUpperCase()[0];
    result += s.slice(1);
    return result;
  };

  useEffect(() => {
    for (let i = 0; i < favStore.length; i++) {
      if (favStore[i] == props.id) {
        setIsFavorite(true);
        setSvg("svg_favorite");
        return;
      }
    }
    setIsFavorite(false);
    setSvg("svg_add_favorite");
  }, [favStore]);

  const favorite_change = (e) => {
    e.preventDefault();

    if (isFavorite) {
      saveFavStore(favStore.filter((element) => element !== props.id));
      setIsFavorite(false);
    } else {
      favStore.push(props.id);
      saveFavStore(favStore);
      setIsFavorite(true);
    }
  };

  return (
    <Link className="coinItem" to={"/" + props.id}>
      <div className="coin_item_name">{capitalize(props.id)}</div>
      <button
        data-testid="btn-coinItem-FavoriteTest"
        onClick={favorite_change}
        className={"coin_item_heart " + svg}
      ></button>
    </Link>
  );
}

