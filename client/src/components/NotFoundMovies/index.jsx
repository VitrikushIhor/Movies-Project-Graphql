import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import noMoviesImageSrc from "../../assets/no_movies.png";

export const NotFoundMovies = () => {
  const NoMovies = styled(Box)(() => ({
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  }));

  return (
    <NoMovies>
      <Box
        component="img"
        sx={{
          width: "50%",
          opacity: ".6",
        }}
        alt="No images."
        src={noMoviesImageSrc}
      />
      <Typography variant="h5" mt={2}>
        No selected movies
      </Typography>
    </NoMovies>
  );
};
