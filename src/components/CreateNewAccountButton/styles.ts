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

    width: (Dimensions.get("screen").width - 60) / 2,
    height: 75,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.MAIN,
  },

  createAccountButtonText: {
    fontSize: 14,
    marginBottom: -2,
    fontFamily: "Rubik400",
    color: COLORS.MAIN,
  },
});
