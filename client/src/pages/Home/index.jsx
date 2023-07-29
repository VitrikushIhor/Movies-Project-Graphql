import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { MovieCard, MovieCardSelected } from "../../components/index.jsx";
import { useQuery } from "@apollo/client";
import { MOVIES_QUERY } from "./queries.js";
import { useState } from "react";
import { Pagination } from "@mui/material";
import usePagination from "../../hooks/Pagination.js";
import { useMovies } from "../../hooks/useMovies.js";
import { NotFoundMovies } from "../../components/NotFoundMovies/index.jsx";
import SelectedMoviesForm from "../../components/SelectedMoviesForm/index.jsx";

export const Home = () => {
  const [page, setPage] = useState(1);

  const { selectedMovies, selectMovie, deleteMovie } = useMovies();

  const { loading, data } = useQuery(MOVIES_QUERY, {
    variables: { page },
  });

  const PER_PAGE = 20;

  const count =
    data?.movies?.totalPages <= 500 ? data?.movies?.totalPages : 500;

  const _DATA = usePagination(
    data?.movies?.results ? data?.movies?.results : [],
    PER_PAGE
  );

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const SelectedMovie = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    height: "calc(100vh - 110px)",
  }));

  const onSubmit = ({ listName }) => {
    const ids = selectedMovies.map(({ id }) => id);
    const link = `${
      window.location.host
    }/recommend?title=${listName}&ids=${ids.join()}`;

    debugger;
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>Filters</Item>
        </Grid>
        <Grid item xs={12} md={8}>
          <Item>
            <Box sx={{ flexGrow: 1, padding: 1 }}>
              <Grid container spacing={2}>
                {loading && "loading..."}
                {_DATA.currentData().map((movie) => (
                  <Grid key={movie.id} item xs={12} md={4} lg={2}>
                    <MovieCard movie={movie} onCardSelect={selectMovie} />
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Pagination
              sx={{ display: "flex", justifyContent: "center" }}
              count={count}
              size="large"
              page={page}
              variant="outlined"
              shape="rounded"
              onChange={handleChange}
            />
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <SelectedMovie>
            <Box sx={{ height: "45.5rem", overflow: "auto" }}>
              {selectedMovies.length === 0 ? (
                <NotFoundMovies />
              ) : (
                selectedMovies.map((movie) => (
                  <MovieCardSelected
                    key={movie.id}
                    movie={movie}
                    onDeleteClick={deleteMovie}
                  />
                ))
              )}
            </Box>
            <Box pt={2}>
              <SelectedMoviesForm onSubmit={onSubmit} />
            </Box>
          </SelectedMovie>
        </Grid>
      </Grid>
    </Box>
  );
};
