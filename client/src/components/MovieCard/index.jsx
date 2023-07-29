import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardHeader } from "../CardHeader/index.jsx";
import PropTypes from "prop-types";
import MenuItem from "@mui/material/MenuItem";

export const MovieCard = ({ movie, onCardSelect }) => {
  return (
    <Card sx={{ maxWidth: 150, position: "relative" }}>
      <CardHeader type="first">
        <MenuItem onClick={() => onCardSelect(movie)}>Select</MenuItem>
      </CardHeader>
      <CardMedia
        component="img"
        height="225"
        image={movie.image}
        alt={movie.title}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {movie.title}
        </Typography>
        <Typography variant="subtitle3" gutterBottom>
          {movie.releaseDate}
        </Typography>
      </CardContent>
    </Card>
  );
};
MovieCard.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
  }).isRequired,
  onCardSelect: PropTypes.func,
};
