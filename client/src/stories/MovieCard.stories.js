import {MovieCard} from "../components";
import {movies} from "./stub.js";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Example/MovieCard",
  component: MovieCard,
  tags: ["autodocs"],
  argTypes: {},
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    movie: movies[0],
  },
};
