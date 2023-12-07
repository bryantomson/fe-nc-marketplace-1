import { Link } from "react-router-dom";
import { getCategories } from "./api";
import { useEffect, useState } from "react";



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
            <li className="category-link" key={category.category_name}>
              <Link to={`${category.category_name}`}>
                {category.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
