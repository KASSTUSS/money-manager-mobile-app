import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  createAccountButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 6,

    width: 125,
    height: 34,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: COLORS.MAIN,
  },

  createAccountButtonText: {
    fontSize: 13,
    fontFamily: "Rubik500",
    color: COLORS.MAIN,
  },
});
