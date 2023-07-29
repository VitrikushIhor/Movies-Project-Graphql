import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { CardHeader } from "../CardHeader/index.jsx";
import MenuItem from "@mui/material/MenuItem";

export const MovieCardSelected = ({ movie, onDeleteClick }) => {
  return (
    <Box sx={{ padding: "0.5rem" }}>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={movie.image}
          alt={movie.title}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            width: "100%",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {movie.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {movie.releaseDate}
            </Typography>
          </CardContent>
          <Box sx={{ padding: 2 }}>
            {movie.genres?.length ? (
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {movie.genres[0].name}
              </Typography>
            ) : null}
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Length: {movie.runtime}21123
            </Typography>
          </Box>
          <CardHeader type={"second"}>
            <MenuItem onClick={() => onDeleteClick(movie)}>Delete</MenuItem>
          </CardHeader>
        </Box>
      </Card>
    </Box>
  );
};

MovieCardSelected.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
    runtime: PropTypes.number,
  }).isRequired,
  onDeleteClick: PropTypes.func,
};
