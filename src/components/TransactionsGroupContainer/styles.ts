import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";

export const styles = StyleSheet.create({
  transactionsGroupContainer: {
    width: "100%",
    gap: 10,
  },

  transactionsGroupTitle: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 20,
    gap: 3.5,
  },
  transactionsGroupTitleDate: {
    textTransform: "uppercase",
    fontSize: 13,
    fontFamily: "Rubik500",
  },
  transactionsGroupTitleValue: {
    fontSize: 15,
    fontFamily: "Rubik600",
  },
  transactionsContainer: {
    gap: 8,
  }
});