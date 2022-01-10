import React from "react";
import { Grid, Skeleton } from "@mui/material";
import { useSelector } from "react-redux";
import { PokeListStyles } from "../assets/styles/PokeList/PokeListStyles";
import { PokeCard } from "./PokeCard";

export const PokeList = () => {
  const { pokemons, loading } = useSelector((state) => state.pokemonList);

  const styles = PokeListStyles();

  return (
    <Grid container sx={styles.gridContainer}>
      {pokemons.length > 0 && loading === false
        ? pokemons[0].map((pokemon) => (
            <PokeCard key={pokemon.id} pokemon={pokemon} />
          ))
        : Array.from(new Array(20)).map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Skeleton
                animation="wave"
                variant="rectangular"
                width={220}
                height={300}
                sx={styles.skeleton}
              />
            </Grid>
          ))}
    </Grid>
  );
};
