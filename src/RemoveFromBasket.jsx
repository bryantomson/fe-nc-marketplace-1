export default function RemoveFromBasket({ setBasket, item }) {
  function handleRemoveButton() {
    setBasket((currBasket) => {
        return [...currBasket].filter((curritem) => (curritem.item_id!==item.item_id))
    });
  }

  

  return (
    <button id="remove-from-basket-button" onClick={handleRemoveButton}>
      Remove from basket
    </button>
  );
}
