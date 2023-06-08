import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_TYPE = "GET_TYPE";
export const GET_DELETE_POKEMONS = "GET_DELETE_POKEMONS";
export const GET_ITEM_BY_ID = "GET_ITEM_BY_ID";
export const GET_ITEM_BY_NAME = "GET_ITEM_BY_NAME";
export const CLEAR_SEARCH = "CLEAR_SEARCH";
export const GET_MODIFY_POKEMONS = "GET_MODIFY_POKEMONS";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const FILTER_BY_CREATED = "FILTER_BY_CREATED";
export const ORDER_BY_AZ = "ORDER_BY_AZ";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
export const GET_NOT_FOUND = "GET_NOT_FOUND";

export function getPokemons() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3003/pokemon`);
      console.log("Response data:", response.data);
      dispatch({ type: GET_POKEMONS, payload: response.data });
    } catch (error) {
      console.log("Get getPokemons Actions Error:", error);
    }
  };
}

export function getType() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3003/type`);
      console.log("Response data:", response.data);
      dispatch({ type: GET_TYPE, payload: response.data });
    } catch (error) {
      console.log("Get getType Actions Error:", error);
    }
  };
}

export function getDeletePokemons() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3003/pokemon`);
      const createdDogs = response.data.filter((dog) => dog.create);
      dispatch({ type: GET_DELETE_POKEMONS, payload: createdDogs });
    } catch (error) {
      console.log("Get getDeletePokemons Actions Error:", error);
    }
  };
}

export function getItemById(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3003/pokemon/${id}`);
      dispatch({ type: GET_ITEM_BY_ID, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_ITEM_BY_ID, payload: null });
    }
  };
}

export function getItemByName(payload) {
  return async function (dispatch) {
    try {
      let response = await axios.get(
        `http://localhost:3003/pokemon?name=` + payload
      );
      return dispatch({
        type: GET_ITEM_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
      return dispatch({
        type: GET_NOT_FOUND,
      });
    }
  };
}

export function clearSearch() {
  return { type: CLEAR_SEARCH };
}

export function getModifyPokemons() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3003/pokemon`);
      const createdDogs = response.data.filter((dog) => dog.create);
      dispatch({ type: GET_MODIFY_POKEMONS, payload: createdDogs });
    } catch (error) {
      console.log("Get getModifyPokemons Actions Error:", error);
    }
  };
}

export function FilterByType(payload) {
  return {
    type: "FILTER_BY_TYPE",
    payload,
  };
}

export function FilterByCreated(payload) {
  if (payload === "All") {
    return {
      type: "FILTER_BY_CREATED",
      payload: payload,
    };
  } else {
    return {
      type: "FILTER_BY_CREATED",
      payload: payload === "true",
    };
  }
}

export function orderByAZ(payload) {
  return {
    type: "ORDER_BY_AZ",
    payload,
  };
}

export function orderByAttack(payload) {
  return {
    type: "ORDER_BY_ATTACK",
    payload,
  };
}
