import { types } from "../types/types";

export const paginationAction = (page) => {
  return async dispatch => {

    try{

      const offset = (page * 20) - 20
    
      const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20"`
    
      dispatch(setUrl(url));
      dispatch(setPage(page))

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

const setUrl = (url) => ({
  type: types.setUrl,
  payload: url,
});

const setPage = (page) => ({
  type: types.setPage,
  payload: page
});