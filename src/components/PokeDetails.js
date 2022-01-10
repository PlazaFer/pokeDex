import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PokeDetailsStats } from "./PokeDetailsStats";
import axios from "axios";

import { PokeDetailsStyles } from "../assets/styles/PokeDetails/PokeDetailsStyles";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import {
  Paper,
  Box,
  Divider,
  Typography,
  Button,
  Fade,
  Skeleton,
} from "@mui/material";
import { setImagePokemon } from "../helpers/setImagePokemon";
import { PokeDetailsInfo } from "./PokeDetailsInfo";

export const PokeDetails = () => {
  const styles = PokeDetailsStyles();

  const [pokemon, setPokemon] = useState();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getPokemon = async () => {
      const resultPokemon = await axios(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemon(resultPokemon.data);
    };
    getPokemon();
  }, []);

  return (
    <>
      {pokemon ? (
        <Fade in={true} timeout={{ enter: 1100 }}>
          <Paper sx={styles.paperContainer} elevation={12}>
            <Box sx={styles.name}>
              <Button sx={{justifySelf: 'flex-start'}} onClick={() => navigate("/")}>
                <ArrowBackRoundedIcon />
              </Button>
              <Typography variant="h4">{pokemon.name}</Typography>
              <Typography
                variant="h4"
                sx={{ color: "#707B7C", marginLeft: "10px" }}
              >
                #{pokemon.id}
              </Typography>
            </Box>
            <Box sx={styles.containerGeneral}>
              <Box sx={styles.imgBox}>
                <img
                  src={setImagePokemon(pokemon.sprites)}
                  alt={pokemon.name}
                  style={styles.image}
                />
              </Box>
              <PokeDetailsStats pokemon={pokemon} />
            </Box>
            <PokeDetailsInfo pokemon={pokemon} />
          </Paper>
        </Fade>
      ) : (
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={600}
          height={400}
          sx={{ margin: "50px auto 50px auto" }}
        />
      )}
    </>
  );
};


