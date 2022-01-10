import { types } from "../types/types";

const initialState = {
  pokemons: [],
  url: `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"`,
  page: 1, 
  count: '',
  loading: true,
  error: false,
};

export const pokemonsListReducer = (state = initialState, action) => {

    switch (action.type) {
      case types.loadingState:
        return {
          ...state,
          loading: action.payload,
        };

      case types.LoadPokemons:
        return {
          ...state,
          pokemons: [action.payload],
        };

      case types.setTotalPokemons:
        return {
          ...state,
          count: action.payload,
        };

      case types.setUrl:
        return {
          ...state,
          url: action.payload,
        };
      
      case types.setPage:
        return{
          ...state,
          page: action.payload
        };

      case types.searchPokemon:
        return{
          ...state,
          pokemons: action.payload
        }

      default:
        return state;
    }
}