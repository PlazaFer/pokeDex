import React, { useEffect } from 'react'
import { Grid, Typography, Box } from '@mui/material';
import { PokeDetailsInfoStyles } from '../assets/styles/PokeDetails/PokeDetailsInfoStyles';
import { setColorType } from '../helpers/setColorType';

export const PokeDetailsInfo = ({pokemon}) => {

    const height = (pokemon.height / 10).toFixed(1);
    const weight = (pokemon.weight / 10).toFixed(1); 

    const styles = PokeDetailsInfoStyles();
    

   console.log(pokemon)
    
    return (
      <Box sx={styles.containerGeneral}>
        <Box sx={styles.container}>
          <Typography sx={styles.title} variant="subtitle1">
            Height
          </Typography>
          <Typography variant="subtitle2">{height} Mts</Typography>
        </Box>
        <Box sx={styles.container}>
          <Typography sx={styles.title} variant="subtitle1">
            Weight
          </Typography>
          <Typography variant="subtitle2">{weight} Kg</Typography>
        </Box>
        <Box sx={styles.container}>
          <Typography sx={styles.title} variant="subtitle1">
            Abilities
          </Typography>
          {pokemon.abilities.map((ability, i) => (
            <Typography
              key={i}
              variant="subtitle2"
              sx={{ textTransform: "capitalize" }}
            >
              {ability.ability.name}
            </Typography>
          ))}
        </Box>
        <Box sx={styles.container}>
          <Typography sx={styles.title} variant="subtitle1">
            Type
          </Typography>
          {pokemon.types.map((types, i) => (
            <Typography
              key={i}
              variant="subtitle2"
              sx={styles.typesContent}
              style={{ backgroundColor: setColorType(types.type.name) }}
            >
              {types.type.name}
            </Typography>
          ))}
        </Box>
      </Box>
    );
}
