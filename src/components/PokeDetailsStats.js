import React from "react";
import { Box, Typography, LinearProgress, Fade } from "@mui/material";
import { PokeDetailsStatsStyles } from "../assets/styles/PokeDetails/PokeDetailsStatsStyles";


export const PokeDetailsStats = ({ pokemon }) => {
 

  const styles = PokeDetailsStatsStyles();
  


  return (
    <Fade in={true} timeout={{ enter: 1100 }}>
      <Box sx={styles.generalContainer}>
        {pokemon.stats.map((stats, i) => (
          <Box key={i} sx={styles.statsContainerIndividual}>
            <Typography variant="body1" sx={styles.titleStat}>
              {stats.stat.name}
            </Typography>
            <Box sx={styles.progressContainer}>
              <LinearProgress
                variant="determinate"
                value={stats.base_stat}
                sx={styles.linear}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Fade>
  );
};
