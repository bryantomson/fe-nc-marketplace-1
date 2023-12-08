import { Link } from "react-router-dom";

export default function Header({ basket }) {
  if (!basket.length) {
    return (
      <div className="header">
        <h1>NC MARKETPLACE</h1>
        <Link id="view-basket" className="basket-icon" to="Basket">
          <span id="view-basket-text">View basket</span>🧺
        </Link>
      </div>
    );
  } else
    return (
      <div className="header">
        <h1>NC MARKETPLACE</h1>
        <Link id="view-basket" className="basket-icon" to="Basket">
          <span id="view-basket-text">View basket</span>🧺
        </Link>
        <p> {basket.length}{` item${basket.length>1 ? "s": "" }`} </p>
      </div>
    );
}
