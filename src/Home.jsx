import { Link } from "react-router-dom";
import { getCategories } from "./api";
import { useEffect, useState } from "react";
import SellItem from "./SellItem";



export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories)
    });
  }, []);
  

  return (
    <div className="content">
      <ul>
        {categories.map((category) => {
          return (
            <li className='category-link' key={category.category_name}>
              <Link to={`${category.category_name}`}>
                <img className ='image-icon-cat'src={`https://www.emergerecycling.co.uk/wp-content/uploads/2020/08/shutterstock_11855155842-2.jpg`} />
                {category.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
