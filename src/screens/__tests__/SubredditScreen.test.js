import React from "react";
import SubredditScreen from "../SubredditScreen";
import { act, render, waitFor } from "@testing-library/react-native";
import * as services from "../../service";

const getTestProps = () => ({
  navigation: {
    navigate: () => {},
  },
  route: {
    params: {
      subreddit: "pics",
    },
  },
});
const getTestResponse = () => [
  {
    author: "alexflemingart",
    created: new Date(1232850357.0 * 1000),
    id: "vcsgpj",
    numComments: 224,
    score: 4720,
    subreddit: "r/pics",
    thumbnail:
      "https://b.thumbs.redditmedia.com/8qowQW91JVgb5ktjKg6biACUVQ13i5N882Zn0JmPvgY.jpg",
    title:
      "[OC] Here's an African Elephant I drew in charcoal. ~100 hours work. Have a great Wednesday!",
    url: "https://i.redd.it/uvl9v7s9ur591.jpg",
  },
  {
    author: "alexflemingart2",
    created: new Date(1232850357.0 * 1000),
    id: "vcsgph",
    numComments: 224,
    score: 4720,
    subreddit: "r/pics",
    thumbnail:
      "https://b.thumbs.redditmedia.com/8qowQW91JVgb5ktjKg6biACUVQ13i5N882Zn0JmPvgY.jpg",
    title:
      "[OC] Here's an African Elephant I drew in charcoal. ~100 hours work. Have a great Wednesday!",
    url: "https://i.redd.it/uvl9v7s9ur591.jpg",
  },
];

describe("<SubredditScreen/>", () => {
  it("renders all <PostListItem/>", async () => {
    services.getPosts = jest.fn().mockResolvedValueOnce(getTestResponse());
    const component = render(<SubredditScreen {...getTestProps()} />);
    await waitFor(() =>
      expect(component.getAllByTestId("post-container").length).toBe(2)
    );
  });
});
