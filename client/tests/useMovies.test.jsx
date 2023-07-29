import { renderHook } from "@testing-library/react-hooks";
import { useMovies } from "../src/hooks/useMovies.js";
import { act } from "react-dom/test-utils";

describe("useMoviesHook", () => {
  const basicMovie = {
    id: 1,
    title: "Movie title",
  };
  it("should return", () => {
    const { result } = renderHook(() => useMovies());
    act(() => {
      result.current.selectMovie(basicMovie);
    });
    expect(result.current.selectMovie.length).toBe(1);
  });
  it("should delete movie", () => {
    const { result } = renderHook(() => useMovies());
    act(() => {
      result.current.selectMovie(basicMovie);
    });
    expect(result.current.selectedMovies.length).toBe(1);

    act(() => {
      result.current.deleteMovie(basicMovie);
    });

    expect(result.current.selectedMovies.length).toBe(0);
  });
  it("should select movie only once", () => {
    const { result } = renderHook(() => useMovies());
    act(() => {
      result.current.selectMovie(basicMovie);
    });
    expect(result.current.selectedMovies.length).toBe(1);
    expect(result.current.selectedMovies[0].id).toBe(basicMovie.id);
  });
  it("should add no more movies than  allowed", () => {
    const { result } = renderHook(() => useMovies());
    for (let i = 0; i < 20; i++) {
      act(() => {
        result.current.selectMovie({
          ...basicMovie,
          id: i,
        });
      });
    }
    expect(result.current.selectedMovies.length).toBe(20);
    act(() => {
      result.current.selectMovie({
        ...basicMovie,
        id: 21,
      });
    });

    expect(result.current.selectedMovies.length).toBe(20);
  });
});
