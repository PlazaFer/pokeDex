import { useTheme } from '@mui/material';

export const PokeDetailsInfoStyles = () => {
    return {
      containerGeneral: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "25px auto 25px auto",
        [useTheme().breakpoints.up("sm")]: {
          flexDirection: "row",
          justifyContent: "space-evenly",
        }
      },
      title: {
        fontWeight: "bold",
      },
      container: {
        display: "flex",
        flexDirection: "column",
        marginTop: "20px",
      },
      typesContent: {
        marginBottom: "4px",
        padding: "1px 7px 1px 7px",
        borderRadius: useTheme().shape.borderRadius,
        color: "#FFF",
      },
    };
}
