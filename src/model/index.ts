export type Post = {
  id: string;
  title: string;
  author: string;
  score: number;
  thumbnail: string;
  url: string;
  numComments: number;
  created: Date;
  subreddit: string;
};

export const SORT_OPTIONS = ["hot", "new", "top", "controversial"] as const;
export type SortBy = typeof SORT_OPTIONS[number];
