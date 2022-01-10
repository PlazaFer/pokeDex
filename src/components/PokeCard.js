import React from "react";
import { Grid, Box, CardMedia, Paper, Typography, Fade } from "@mui/material";

import backgroundImage from "../assets/statics/img/backgroundPokemon.jpg";
import { PokeTypesCard } from "./PokeTypesCard";
import { PokeCardStyles } from "../assets/styles/PokeCard/PokeCardStyles";
import { useNavigate } from "react-router-dom";
import { setImagePokemon } from "../helpers/setImagePokemon";

export const PokeCard = ({ pokemon }) => {
  const styles = PokeCardStyles();
  const navigate = useNavigate();

  const image = setImagePokemon(pokemon.sprites);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper
        sx={styles.paperContainer}
        onClick={() => navigate(`/pokemon/${pokemon.id}`)}
      >
        <Fade in={true} timeout={{ enter: 1500 }} sx={styles.transition}>
          <Box sx={styles.containerGeneral}>
            <CardMedia
              component="img"
              image={backgroundImage}
              alt="Background Card"
              sx={styles.backgroundImage}
            />
            <Box sx={styles.containerContent}>
              <Box sx={styles.imgContainer}>
                <Box sx={styles.imgBox}>
                  <img src={image} alt={pokemon.name} style={styles.image} />
                </Box>
              </Box>
              <Typography variant="h6" sx={styles.name}>
                {pokemon.name}
              </Typography>
            </Box>

            <PokeTypesCard pokemon={pokemon} />
          </Box>
        </Fade>
      </Paper>
    </Grid>
  );
};
