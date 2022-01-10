import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { pokemonsListReducer } from "../reducers/pokemonsListReducer";


const reducers = combineReducers({
  // Aqui se agregan los reducers que van a ser parte de nuestro store
  // Example auth: authReducer
  pokemonList: pokemonsListReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);