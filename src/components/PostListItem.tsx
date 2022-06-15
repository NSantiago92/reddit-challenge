import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Post } from "../model";
import { SubredditNavProps } from "../screens/SubredditScreen";
import kFormatter from "../utils/kFormatter";
import relativeDate from "../utils/relativeDate";

interface PostListItemProps {
  post: Post;
  navigation: SubredditNavProps["navigation"];
}

const PostListItem = ({ post, navigation }: PostListItemProps): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={() => navigation.push("Post", { url: post.url })}
    >
      <View style={styles.container}>
        <View style={styles.scoreContainer}>
          <Text style={styles.score}>{kFormatter(post.score)}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{post.title}</Text>
          <View style={styles.detailsSubContainer}>
            <Text style={styles.comments}>{post.numComments} comments</Text>
            <Text style={styles.date}>
              {relativeDate(post.created)} days ago
            </Text>
          </View>
        </View>
        <View style={styles.thumbnailContainer}>
          <Image source={{ uri: post.thumbnail }} style={styles.thumbnail} />
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
    fontSize: 13,
    fontWeight: "bold",
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
