import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { SortBy } from "./src/model";
import PostScreen from "./src/screens/PostScreen";
import SubredditScreen from "./src/screens/SubredditScreen";

export type RootStackParams = {
  Subreddit: { subreddit: string };
  Post: { url: string; title: string };
};

const rootStack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <rootStack.Navigator
        initialRouteName="Subreddit"
        screenOptions={{ headerTitleAlign: "center" }}
      >
        <rootStack.Screen
          name="Subreddit"
          component={SubredditScreen}
          initialParams={{ subreddit: "pics" }}
          options={({ route }) => ({ title: "r/" + route.params.subreddit })}
        />
        <rootStack.Screen
          name="Post"
          component={PostScreen}
          options={({ route }) => ({ title: route.params.title })}
        />
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
