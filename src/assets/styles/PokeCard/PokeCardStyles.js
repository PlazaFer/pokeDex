import { useTheme } from '@mui/material';

export const PokeCardStyles = () => {
    return {
      paperContainer: {
        maxWidth: "250px",
        margin: '30px auto 20px auto',
        cursor: "pointer",
        boxShadow: useTheme().shadows[10],
        borderRadius: useTheme().shape.borderRadius,
        transition: "0.3s",
        "&:hover": {
          boxShadow: useTheme().shadows[24],
          transform: "scale(1.05)",
        },
      },
      transition: {
        paddingBottom: '10px'
      },
      containerGeneral: {
        width: "250px",
        height: "100%",
        paddingBottom: "10px",
      },
      backgroundImage: {
        width: "100%",
        height: "120px",
        borderRadius: "18px 18px 0 0",
      },
      containerContent: {
        width: "100%",
      },
      imgContainer: {
        display: "flex",
        justifyContent: "center",
        position: "relative",
        height: "50px",
        margin: "auto",
      },
      imgBox: {
        width: "150px",
        height: "150px",
        position: "absolute",
        top: "-110px",
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "50%",
      },
      image: {
        width: "150px",
        height: "150px",
      },
      name: {
        textAlign: "center",
        marginTop: "25px",
        marginBottom: "10px",
        textTransform: "capitalize  ",
        fontWeight: "bold",
      },
    };
}