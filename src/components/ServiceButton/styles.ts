import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  serviceButtonContainer: {
    width: (Dimensions.get("screen").width - 120) / 3,
    height: (Dimensions.get("screen").width - 120) / 3,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 5,
  },
  serviceIconContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  serviceTitle: {
    position: "absolute",
    bottom: -20,
    width: "100%",
    maxWidth: "100%",
    textAlign: "center",
    color: COLORS.MAIN_TEXT,
    fontSize: 12,
    fontFamily: "Rubik500",
  },
});