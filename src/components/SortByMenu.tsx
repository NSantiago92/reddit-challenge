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
          <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            style={s === sortBy ? styles.buttonTextSel : styles.buttonText}
          >
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
    justifyContent: "space-evenly",
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
    flexBasis: 100,
    paddingBottom: 15,
    paddingTop: 15,
    backgroundColor: "white",
  },
  buttonText: {
    textAlign: "center",
    color: "#6495ed",
    fontWeight: "bold",
  },
  buttonSel: {
    flexBasis: 100,
    paddingBottom: 15,
    paddingTop: 15,
    backgroundColor: "#6495ed",
  },
  buttonTextSel: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});

export default SortByMenu;
