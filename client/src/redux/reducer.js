import {
  GET_POKEMONS,
  GET_TYPE,
  GET_DELETE_POKEMONS,
  GET_ITEM_BY_ID,
  GET_ITEM_BY_NAME,
  CLEAR_SEARCH,
  GET_MODIFY_POKEMONS,
  FILTER_BY_TYPE,
  FILTER_BY_CREATED,
  ORDER_BY_AZ,
  ORDER_BY_ATTACK,
  GET_NOT_FOUND,
} from "./actions";

import { pokenot } from "../images/images.js";

const initialState = {
  pokemons: [],
  allPokemons: [],
  types: [],
  deleteItem: [],
  itemById: [],
  modifyItem: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };
    case GET_TYPE:
      return {
        ...state,
        types: action.payload,
      };

    case GET_ITEM_BY_ID:
      return {
        ...state,
        itemById: action.payload,
      };

    case GET_ITEM_BY_NAME:
      let search;
      if (Array.isArray(action.payload) && action.payload.length > 0) {
        search = action.payload;
      } else {
        search = [];
      }
      return {
        ...state,
        pokemons: search,
      };

    case GET_NOT_FOUND:
      const notFoundItem = [
        {
          name: "not found",

          image: pokenot,
          types: "Try other pokemon",
        },
      ];
      return {
        ...state,
        pokemons: notFoundItem,
      };

    case CLEAR_SEARCH:
      return {
        ...state,
        allPokemons: state.initialPokemons,
      };

    case GET_MODIFY_POKEMONS:
      return {
        ...state,
        modifyItem: action.payload,
      };
    case GET_DELETE_POKEMONS:
      return {
        ...state,
        deleteItem: action.payload,
      };

    case FILTER_BY_TYPE:
      const allTypes = state.allPokemons;
      const filteredTypes =
        action.payload === "All"
          ? allTypes
          : allTypes.filter((el) => el.types.includes(action.payload));
      return {
        ...state,
        pokemons: filteredTypes,
      };
    case FILTER_BY_CREATED:
      const allCreated = state.allPokemons;
      const filteredCreated =
        action.payload === "All"
          ? allCreated
          : allCreated.filter((el) => el.create === action.payload);
      return {
        ...state,
        pokemons: filteredCreated,
      };

    case ORDER_BY_AZ:
      const allAlphabet = state.allPokemons;
      let sortedArr;
      if (action.payload === "des") {
        sortedArr = state.pokemons.slice().sort(function (a, b) {
          return a.name.localeCompare(b.name);
        });
      } else if (action.payload === "asc") {
        sortedArr = state.pokemons.slice().sort(function (a, b) {
          return b.name.localeCompare(a.name);
        });
      } else if (action.payload === "clear") {
        sortedArr = allAlphabet;
      }

      return { ...state, pokemons: sortedArr };

    case ORDER_BY_ATTACK:
      const allItems = state.allPokemons;
      let sortedItems;
      if (action.payload === "asc") {
        sortedItems = state.pokemons.slice().sort(function (a, b) {
          return b.attack - a.attack;
        });
      } else if (action.payload === "des") {
        sortedItems = state.pokemons.slice().sort(function (a, b) {
          return a.attack - b.attack;
        });
      } else if (action.payload === "clear") {
        sortedItems = allItems;
      }

      return { ...state, pokemons: sortedItems };

    default:
      return state;
  }
};

export default rootReducer;
