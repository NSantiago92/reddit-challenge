import renderer from "react-test-renderer";
import PostListItem from "../PostListItem";

const testPost = {
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
};

it("<PostListItem/> renders correctly", () => {
  const tree = renderer
    .create(<PostListItem post={testPost} goToPost={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
