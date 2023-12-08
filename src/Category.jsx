import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItems } from "./api";
import AddToBasket from "./AddToBasket";
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
<div className="items-table-container">
    
    
          <table className="items-table">
            <thead>
              <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Add to Basket</th>
              </tr>
            </thead>
            <tbody>
    
            {itemsInCat.map((item) => {
              return (
                <tr className="list-item" key={item.item_id}>
                  <td><img className="item-thumbnail" src={item.img_url} /></td>
                  <td>
                      <p>{item.item_name}</p>
                  </td>
                  <td>{item.description}</td>

                  <td>
                      <p>{`£ ${item.price}`}</p>
                  </td>
                  <td>
                    <AddToBasket setBasket = {setBasket}/>
                  </td>
                </tr>
              );
            })}
            </tbody>
          </table>
</div>
    </div>
  );
}
