import { useTheme } from '@mui/material';

export const PokeListStyles = () => {
  return {
    gridContainer: {
      width: "100%",
      heigth: "100%",
      marginTop: useTheme().spacing(10),
    },
    skeleton: {
      margin: "30px auto 20px auto",
    },
  };
};
