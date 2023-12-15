import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  widgetContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingLeft: 20,
    paddingTop: 15,
    paddingRight: 20,
    paddingBottom: 20,
  },

  widgetTitleContainer: {
    width: "100%",
  },

  widgetTitle: {
    fontSize: 15,
    fontFamily: "Rubik500",
    color: COLORS.MAIN_TEXT,
  },

  widgetContent: {
    width: "100%",
  },
});
