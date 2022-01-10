import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTweentyPokemons } from "../redux/actions/loadPokemons";
import { NavBar } from "./NavBar";
import { useTheme, Box } from "@mui/material";
import { PokeList } from "./PokeList";
import { Paginations } from "./Paginations";
import "../assets/styles/index.css";

export const HomePage = () => {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.pokemonList.url);

  useEffect(() => {
    const responseTweentyPokemons = async () => {
      dispatch(getTweentyPokemons(url));
    };

    responseTweentyPokemons();
  }, [url, dispatch]);

  return (
    <>
      <NavBar />
      <Box sx={useTheme().mixins.toolbar}></Box>
      <PokeList />
      <Paginations />
    </>
  );
};
