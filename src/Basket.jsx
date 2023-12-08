import BasketItemsList from "./BasketItemsList";


export default function Basket ({basket, setBasket}) {

    console.log(basket, "<----basket")
    return (
      <>
        <h1>BASKET</h1>
        <BasketItemsList setBasket={setBasket} basket={basket}/>
      </>
    );

}