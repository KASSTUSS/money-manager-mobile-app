import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";

export const styles = StyleSheet.create({
  accountBlock: {
    width: (Dimensions.get('screen').width - 60) / 2,
    height: 75,
    borderRadius: 20,
    overflow: "hidden",
  },

  gradientContainer: {
    width: "100%",
    height: "100%",

    paddingTop: 8,
    paddingLeft: 20,
  },

  title: {
    color: "#ffffff",
    fontFamily: "Rubik500",
    fontSize: 15,
  },

  value: {
    color: "#ffffff",
    fontFamily: "Rubik700",
    fontSize: 23,
  },
});