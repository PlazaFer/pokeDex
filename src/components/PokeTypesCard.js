import React from "react";
import { Box, Typography } from "@mui/material";
import { PokeTypesStyles } from "../assets/styles/PokeCard/PokeTypesStyles";
import { setColorType } from "../helpers/setColorType";

export const PokeTypesCard = ({ pokemon }) => {
  
  const styles = PokeTypesStyles();


  return (
    <>
      <Box sx={styles.containerTypes}>
        {pokemon.types.map((types, i) => (
          <Typography
            key={i}
            variant="caption"
            sx={styles.type}
            style={{ backgroundColor: setColorType(types.type.name) }}
          >
            {types.type.name}
          </Typography>
        ))}
      </Box>
      <Box sx={styles.containerId}>
        <Typography variant="subtitle2" sx={styles.id}>
          #{pokemon.id}
        </Typography>
      </Box>
    </>
  );
};
