import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { RootStackParams } from "../../App";

type NavProps = NativeStackScreenProps<RootStackParams, "Subreddit">;

interface SubredditScreenProps {
  navigation: NavProps["navigation"];
  route: NavProps["route"];
}

const SubredditScreen = ({ navigation }: SubredditScreenProps): JSX.Element => {
  return (
    <View>
      <Pressable
        onPress={() => navigation.navigate("Post", { url: "www.google.com" })}
      >
        <Text>post</Text>
      </Pressable>
      <Text>SubredditScreen view</Text>
    </View>
  );
};

export default SubredditScreen;
