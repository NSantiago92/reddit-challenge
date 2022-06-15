import { Post, SortBy } from "../model";

export async function getPosts(
  sortBy: SortBy,
  subreddit: string
): Promise<Post[]> {
  const response = await fetch(
    `https://api.reddit.com/r/${subreddit}/${sortBy}.json`
  );
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
        subreddit_name_prefixed: subreddit,
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
