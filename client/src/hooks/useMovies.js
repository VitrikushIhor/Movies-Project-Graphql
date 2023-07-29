import { useCallback, useState } from "react";

export const useMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState([]);

  const selectMovie = useCallback(
    (movie) => {
      const length = selectedMovies.length;
      const isNewMovie = !selectedMovies.find(({ id }) => id === movie.id);

      if (isNewMovie && length < 20) {
        setSelectedMovies([movie, ...selectedMovies]);
      }
    },
    [selectedMovies]
  );

  const deleteMovie = useCallback(
    (movie) => {
      setSelectedMovies(selectedMovies.filter(({ id }) => id !== movie.id));
    },
    [selectedMovies]
  );

  return {
    selectedMovies,
    selectMovie,
    deleteMovie,
  };
};
