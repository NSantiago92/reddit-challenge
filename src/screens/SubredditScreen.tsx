import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { RootStackParams } from "../../App";
import PostListItem from "../components/PostListItem";
import SortByMenu from "../components/SortByMenu";
import { Post, SortBy } from "../model";
import { getPosts } from "../service";

export type SubredditNavProps = NativeStackScreenProps<
  RootStackParams,
  "Subreddit"
>;

interface SubredditScreenProps {
  navigation: SubredditNavProps["navigation"];
  route: SubredditNavProps["route"];
}

const SubredditScreen = ({ navigation }: SubredditScreenProps): JSX.Element => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [sortBy, setSortBy] = useState<SortBy>("new");
  useEffect(() => {
    getPosts(sortBy, "pics").then((p) => {
      setPosts(p);
    });
  }, [sortBy]);
  return (
    <View>
      {posts && (
        <FlatList
          data={posts}
          ListHeaderComponent={
            <SortByMenu sortBy={sortBy} setSortBy={setSortBy} />
          }
          renderItem={({ item }) => (
            <PostListItem post={item} navigation={navigation} />
          )}
          keyExtractor={(p) => p.id}
        />
      )}
    </View>
  );
};

export default SubredditScreen;
