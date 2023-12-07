import axios from "axios";

const marketPlaceAPI = axios.create({
  baseURL: "https://nc-marketplace-sem-3.onrender.com/api",
});

export function getCategories() {
  return marketPlaceAPI.get(`/categories`).then((res) => {
    const { categories } = res.data
    return categories;
  });
}


export function getItems(category_name) {
return marketPlaceAPI.get(`/items`, {params: {category_name: category_name} }).then((res) => {
  const { items } = res.data;
  return items;
});

}
