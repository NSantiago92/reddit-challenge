import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import PostScreen from "./src/screens/PostScreen";
import SubredditScreen from "./src/screens/SubredditScreen";

export type RootStackParams = {
  Subreddit: undefined;
  Post: { url: string };
};

const rootStack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <rootStack.Navigator initialRouteName="Subreddit">
        <rootStack.Screen name="Subreddit" component={SubredditScreen} />
        <rootStack.Screen name="Post" component={PostScreen} />
      </rootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
