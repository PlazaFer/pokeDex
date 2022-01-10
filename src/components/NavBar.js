import React from "react";
import { useDispatch } from "react-redux";
import { Box, AppBar, Toolbar, InputBase, Button } from "@mui/material";
import Search from "@mui/icons-material/Search";
import Logo from "../assets/statics/img/logo.png";
import { NavBarStyles } from "../assets/styles/NavBar/NavBarStyles";
import { useForm } from "../hooks/useForm";
import { searchActions } from "../redux/actions/searchActions";

export const NavBar = () => {
  const dispatch = useDispatch();
  const styles = NavBarStyles();

  const [handleInputChange, values, reset] = useForm({
    search: "",
  });

  const { search } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === "") return;

    dispatch(searchActions(search));

    reset();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar positon="static">
        <Toolbar sx={styles.toolbar}>
          <Box>
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "150px", height: "60px", padding: "5px" }}
            />
          </Box>
          <form style={styles.search} onSubmit={handleSubmit}>
            <Button type="submit" startIcon={<Search />}></Button>
            <InputBase
              placeholder="Search.."
              variant="standard"
              value={search}
              onChange={handleInputChange}
            />
          </form>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
