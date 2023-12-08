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

export function postItems(item) {
  return marketPlaceAPI.post(`/items`, item).then((res) => {
    return res
  })
}

export function getUsers() {
  return marketPlaceAPI.get(`/users`).then((res) => {
    const { users } = res.data
    return users;
  });
}

export const patchUser = (username) => {
  const patchBody = {
    "kudos_inc": 1
  }
  return marketPlaceAPI.patch(`/users/${username}`, patchBody).then((res) => {
    console.log(res);
    return res.data.user.kudos
  })
}
