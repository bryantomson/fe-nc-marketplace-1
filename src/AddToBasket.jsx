import { useState } from "react";

export default function AddToBasket({ setBasket, item }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setBasket((currItems) => {
      return [item, ...currItems];
    });

    setIsClicked(true);
  };

  if (!isClicked) return <button onClick={handleClick}>Add</button>;
  return <button disabled>Item added!</button>;
}
