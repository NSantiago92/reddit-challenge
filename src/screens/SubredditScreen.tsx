import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { RootStackParams } from "../../App";
import ErrorScreen from "../components/ErrorScreen";
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
type QueryStatus = "loading" | "error" | "success";

const SubredditScreen = ({
  navigation,
  route,
}: SubredditScreenProps): JSX.Element => {
  const { subreddit } = route.params;
  const [sortBy, setSortBy] = useState<SortBy>("hot");
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [status, setStatus] = useState<QueryStatus>("loading");
  const refreshing = status === "loading";
  const isMounted = useRef<boolean>(true);

  const loadPosts = () => {
    setStatus("loading");
    getPosts(sortBy, subreddit)
      .then((posts) => {
        if (posts.length === 0) throw new Error();
        if (isMounted.current) {
          setPosts(posts);
          setStatus("success");
        }
      })
      .catch((_) => {
        if (isMounted.current) {
          setStatus("error");
        }
      });
  };

  useEffect(() => {
    isMounted.current = true;
    loadPosts();
    return () => {
      isMounted.current = false;
    };
  }, [sortBy, subreddit]);

  if (status === "loading")
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  if (status === "error") return <ErrorScreen />;

  return (
    <View>
      {posts && (
        <FlatList
          data={posts}
          onRefresh={() => loadPosts()}
          refreshing={refreshing}
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
