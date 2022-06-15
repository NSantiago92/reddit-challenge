import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import WebView from "react-native-webview";
import { RootStackParams } from "../../App";

type NavProps = NativeStackScreenProps<RootStackParams, "Post">;

interface PostScreenProps {
  navigation: NavProps["navigation"];
  route: NavProps["route"];
}

const PostScreen = ({ route }: PostScreenProps): JSX.Element => {
  const { url } = route.params;

  return <WebView source={{ uri: url }} style={{ marginTop: 20 }} />;
};

export default PostScreen;
