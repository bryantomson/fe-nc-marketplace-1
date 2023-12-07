import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItems } from "./api";

export default function Category() {
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
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              
            </tr>
    
            {itemsInCat.map((item) => {
              console.log(item);
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
                </tr>
              );
            })}
          </table>
</div>
    </div>
  );
}
