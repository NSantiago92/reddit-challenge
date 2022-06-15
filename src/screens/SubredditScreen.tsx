import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { RootStackParams } from "../../App";
import PostListItem from "../components/PostListItem";
import { Post } from "../model";
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
  useEffect(() => {
    getPosts().then((p) => {
      setPosts(p);
    });
  }, []);
  return (
    <View>
      {posts && (
        <FlatList
          data={posts}
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
