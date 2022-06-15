import { Post } from "../model";

export async function getPosts(): Promise<Post[]> {
  const response = await fetch("https://api.reddit.com/r/pics/hot.json");
  const {
    data: { children },
  } = await response.json();
  const posts: Post[] = children.map(
    ({
      data: {
        author,
        title,
        score,
        thumbnail,
        id,
        url,
        num_comments: numComments,
        created_utc,
        subreddit,
      },
    }) => ({
      author,
      title,
      score,
      thumbnail,
      id,
      url,
      numComments,
      created: new Date(created_utc * 1000),
      subreddit,
    })
  );
  return posts;
}
