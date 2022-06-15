import React, { Dispatch } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SortBy, SORT_OPTIONS } from "../model";

interface SortByMenuProps {
  sortBy: SortBy;
  setSortBy: Dispatch<SortBy>;
}

const SortByMenu = ({ sortBy, setSortBy }: SortByMenuProps): JSX.Element => {
  return (
    <View style={styles.container}>
      {SORT_OPTIONS.map((s) => (
        <TouchableOpacity
          onPress={() => setSortBy(s)}
          key={s}
          style={s === sortBy ? styles.buttonSel : styles.button}
        >
          <Text style={s === sortBy ? styles.buttonTextSel : styles.buttonText}>
            {s}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    marginBottom: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  button: {
    flex: 1,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: "white",
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    color: "#6495ed",
    fontWeight: "bold",
  },
  buttonSel: {
    flex: 1,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: "#6495ed",
  },
  buttonTextSel: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});

export default SortByMenu;
