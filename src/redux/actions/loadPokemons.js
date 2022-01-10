import { types } from "../types/types";
import axios from 'axios';


export const getTweentyPokemons = (url) => {
    return async dispatch => {

        dispatch(startLoadingPokemons(true));

        try{
            const getPokemons = await axios(url);
            const { data } = getPokemons;

            dispatch(setTotalPokemons(data.count))

            const getArrayPokemons = data.results.map(async el => {
                const pokemons = await axios(el.url);
                return pokemons.data;
            })

            const arrayPokemons = await Promise.all(getArrayPokemons);

            dispatch(LoadFinishPokemons(arrayPokemons));
            dispatch(startLoadingPokemons(false))
            dispatch(setErrorPokemons(false));

        }catch(err){
            dispatch(startLoadingPokemons(false))
            dispatch(setErrorPokemons(true))
        }


    }
}


const startLoadingPokemons = (state) => ({
  type: types.loadingState,
  payload: state,
});

const LoadFinishPokemons = (pokemons) => ({
    type: types.LoadPokemons,
    payload: pokemons
})

const setErrorPokemons = (state) => ({
    type: types.ErrorState,
    payload: state
})


const setTotalPokemons = (total) => ({
  type: types.setTotalPokemons,
  payload: total
});