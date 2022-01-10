import { types } from "../types/types";
import axios from 'axios';

export const searchActions = (pokemon) => {
    return async dispatch => {
        try{

            dispatch(startLoadingPokemons(true));

            const response = await axios(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            
            dispatch(searchPokemon([[response.data]]));

            dispatch(startLoadingPokemons(false));

        }catch(err){
            dispatch(startLoadingPokemons(false));
            dispatch(setErrorPokemons(true));
        }
    }
}


const startLoadingPokemons = (state) => ({
  type: types.loadingState,
  payload: state,
});

const setErrorPokemons = (state) => ({
  type: types.ErrorState,
  payload: state,
});

const searchPokemon = (pokemon) => ({
    type: types.searchPokemon,
    payload: pokemon
});