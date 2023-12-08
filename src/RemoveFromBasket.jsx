export default function RemoveFromBasket({ setBasket, item }) {
  function handleRemoveButton() {
    setBasket((currBasket) => {
        return [...currBasket].filter((curritem) => (curritem.item_id!==item.item_id))


      const updatedBasket = currBasket.filter((currItem) => {

        console.log(item, currBasket, "hwdwiufb")

        console.log(currItem.item_id, item.item_id);
        console.log(currItem.item_id !== item.item_id);
        currItem.item_id !== item.item_id;
      });

      console.log(updatedBasket, "upodadted");
    });
  }

  

  return (
    <button id="remove-from-basket-button" onClick={handleRemoveButton}>
      Remove from basket
    </button>
  );
}
