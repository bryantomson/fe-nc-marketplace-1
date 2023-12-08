import AddToBasket from "./AddToBasket";


export default function ItemList ({itemsInCat, setBasket}) { 

return <div className="items-table-container">
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
            <td>
              <img className="item-thumbnail" src={item.img_url} />
            </td>
            <td>
              <p>{item.item_name}</p>
            </td>
            <td>{item.description}</td>

            <td>
              <p>{`£ ${item.price}`}</p>
            </td>
            <td>
              <AddToBasket item={item} setBasket={setBasket} />
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>;
}