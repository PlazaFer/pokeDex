import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination, Stack } from "@mui/material";
import { paginationAction } from "../redux/actions/paginationAction";
import { PaginationsStyles } from "../assets/styles/Paginations/PaginationsStyles";

export const Paginations = () => {
  const styles = PaginationsStyles();

  const dispatch = useDispatch();
  const state = useSelector((state) => state.pokemonList);

  const count = Math.ceil(state.count / 20);

  const handleChange = (event, value) => {
    dispatch(paginationAction(value));
    window.scrollTo(0, 0);
  };

  return (
    <Stack sx={styles.stack}>
      <Pagination
        count={count}
        page={state.page}
        variant="outlined"
        shape="rounded"
        siblingCount={5}
        onChange={handleChange}
      />
    </Stack>
  );
};
