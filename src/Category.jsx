import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItems } from "./api";
import AddToBasket from "./AddToBasket";
import ItemList from "./ItemList";
export default function Category({setBasket}) {
  const [itemsInCat, setItemsInCat] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getItems(category).then((res) => {
      setItemsInCat(res);
    });
  }, []);

  return (
    <div className={`content-${category}`}>
      <h2>{category}</h2>
< ItemList category={category} setBasket={setBasket} itemsInCat={itemsInCat}/>
    </div>
  );
}
