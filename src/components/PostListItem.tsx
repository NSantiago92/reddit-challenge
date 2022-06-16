import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Post } from "../model";
import kFormatter from "../utils/kFormatter";
import relativeDate from "../utils/relativeDate";

interface PostListItemProps {
  post: Post;
  goToPost: (url: string, title: string) => void;
}

const PostListItem = ({ post, goToPost }: PostListItemProps): JSX.Element => {
  const thumbnailSrc = (() => {
    if (!post.thumbnail) return require("../../assets/default_thumbnail.png");
    switch (post.thumbnail) {
      case "self" || "image" || "default":
        return require("../../assets/default_thumbnail.png");
      case "nsfw":
        return require("../../assets/default_thumbnail_nsfw.png");
      default:
        return { uri: post.thumbnail };
    }
  })();

  return (
    <TouchableOpacity onPress={() => goToPost(post.url, post.title)}>
      <View style={styles.container}>
        <View style={styles.scoreContainer}>
          <Text style={styles.score}>{kFormatter(post.score)}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>
            <Text style={styles.author}> {post.author} </Text>
            {post.title}
            <Text style={styles.subreddit}> ({post.subreddit})</Text>
          </Text>

          <View style={styles.detailsSubContainer}>
            <Text style={styles.comments}>{post.numComments} comments</Text>
            <Text style={styles.date}>{relativeDate(post.created)}</Text>
          </View>
        </View>
        <View style={styles.thumbnailContainer}>
          <Image source={thumbnailSrc} style={styles.thumbnail} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
  },
  scoreContainer: {
    width: 45,
    margin: 3,
  },
  score: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  detailsSubContainer: {
    marginTop: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsContainer: {
    flex: 2,
    margin: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#0000cd",
  },
  author: {
    fontSize: 13,
    fontWeight: "normal",
    color: "black",
    backgroundColor: "#dcdcdc",
  },
  subreddit: {
    fontSize: 13,
    fontWeight: "normal",
    color: "#575757",
  },
  comments: {
    fontSize: 13,
  },
  date: {
    fontSize: 13,
    fontStyle: "italic",
  },
  thumbnailContainer: {},
  thumbnail: {
    width: 64,
    height: 64,
  },
});

export default PostListItem;
