import { useTheme } from '@mui/material';

export const PokeDetailsStatsStyles = () => {


  return {
    generalContainer: {
      width: "100%",
      height: "100%",
    },
    statsContainerIndividual: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      margin: "10px 0 10px 0",
    },
    progressContainer: {
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
    linear: {
      width: "85%",
      height: "10px",
      borderRadius: useTheme().shape.borderRadius,
      boxShadow: useTheme().shadows[5],
    },
    titleStat: {
      margin: "0 10px 0 10px",
      width: "40%",
      textTransform: "capitalize",
      fontWeight: "bold",
    }
  };
};
