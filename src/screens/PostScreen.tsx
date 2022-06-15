import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text } from "react-native";
import { RootStackParams } from "../../App";

type NavProps = NativeStackScreenProps<RootStackParams, "Post">;

interface PostScreenProps {
  navigation: NavProps["navigation"];
  route: NavProps["route"];
}

const PostScreen = ({ route }: PostScreenProps): JSX.Element => {
  const { url } = route.params;

  return <Text>Post Web view: {url}</Text>;
};

export default PostScreen;
