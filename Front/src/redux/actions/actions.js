import { ADDFAVORITE, DELETEFAVORITE, FILTER, ORDER, RESET } from "./types";
import axios from "axios";
// Actions creators
// export function addFavorite(objCharacter) {
//   return { type: ADDFAVORITE, payload: objCharacter };
// }

// ACTION | addFav
export const addFavorite = (character) => {
  const endpoint = "http://localhost:3002/rickandmorty/fav";
  return (dispatch) => {
    axios.post(endpoint, character)
    .then(({ data }) => {
      return dispatch({ type: ADDFAVORITE, payload: data });
    });
  };
};

// export function deleteFavorite(id) {
//   return { type: DELETEFAVORITE, payload: id };
// }

export const deleteFavorite = (id) => {
  const endpoint = "http://localhost:3002/rickandmorty/fav/" + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: DELETEFAVORITE,
        payload: data,
      });
    });
  };
};

export function filterCards(gender) {
  return { type: FILTER, payload: gender };
}

export function orderCards(order) {
  return { type: ORDER, payload: order };
}

export function reset() {
  return { type: RESET };
}
