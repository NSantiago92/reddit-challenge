import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ErrorScreenProps {
  onRefresh: () => void;
}

const ErrorScreen = ({ onRefresh }: ErrorScreenProps): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container} onPress={onRefresh}>
      <Text style={styles.errorMsg}>
        Couldn't load any post :(. Tap to reload
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  errorMsg: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ErrorScreen;
