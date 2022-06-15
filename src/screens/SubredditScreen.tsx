import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { RootStackParams } from "../../App";
import { Post } from "../model";
import { getPosts } from "../service";

type NavProps = NativeStackScreenProps<RootStackParams, "Subreddit">;

interface SubredditScreenProps {
  navigation: NavProps["navigation"];
  route: NavProps["route"];
}

const SubredditScreen = ({ navigation }: SubredditScreenProps): JSX.Element => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  useEffect(() => {
    getPosts().then((p) => {
      setPosts(p);
      console.log(p.length);
    });
  }, []);
  return (
    <View>
      {posts &&
        posts.map((p) => (
          <Pressable
            onPress={() => navigation.navigate("Post", { url: p.url })}
            key={p.id}
          >
            <Text>{p.title}</Text>
          </Pressable>
        ))}
    </View>
  );
};

export default SubredditScreen;
