import React from "react";
import { useTheme } from '@mui/material';

export const PokeDetailsStyles = () => {
  return {
    paperContainer: {
      maxWidth: '700px',
      height: '100%',
      margin: "50px auto 50px auto",
      borderRadius: useTheme().shape.borderRadius,
      display: "flex",
      flexDirection: "column",
    },
    containerGeneral: {
      display: "flex",
      flexDirection: 'column',
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      margin: "auto",
      [useTheme().breakpoints.up('sm')]: {
        flexDirection: 'row-reverse'
      }
    },
    name: {
      width: "100%",
      display: "flex",
      justifyContent: 'center',
      textTransform: "capitalize",
      margin: "10px auto 5px auto",
      fontWeight: "bold",
    },
    imgBox: {
      width: "100%",
      height: "80%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: "250px",
      height: "250px",
    },
  };
};
