import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";
export default function Header({ basket }) {
  const {user} = useContext(UserContext)
    return (
      <>
      <div className="header">
        <Link id='view-home' to='/'>Home</Link>
        <h1>NC MARKETPLACE</h1>
        <Link id='view-users' to='/users'>Users</Link>
        <Link id="view-basket" className="basket-icon" to="Basket">
          <span id="view-basket-text">View basket</span>🧺<span id='view-item-text'>{basket.length ? <p> {basket.length}{` item${basket.length > 1 ? "s" : ""}`} </p> : ""}</span>
        </Link>
        <p className='current-user'>{user} is logged in</p>
        </div>
     </> 
    );
  } 
  

