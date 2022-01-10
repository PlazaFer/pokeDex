import { useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";

export const NavBarStyles = () => {
  return {
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "column",
      [useTheme().breakpoints.up("sm")]: {
        flexDirection: "row",
      },
    },
    search: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: '5px',
      marginBottom: useTheme().spacing(1),
      borderRadius: useTheme().shape.borderRadius,
      backgroundColor: alpha(useTheme().palette.common.white, 0.35),
      "&:hover": {
        backgroundColor: alpha(useTheme().palette.common.white, 0.5),
      }
    },
  };
};
