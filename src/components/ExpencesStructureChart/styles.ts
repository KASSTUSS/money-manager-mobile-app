import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  chartContainer: {
    width: "100%",
  },
  currentBalanceTextContainer: {
    marginBottom: -5,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  currentBalanceTextLabel: {
    fontFamily: "Rubik400",
    fontSize: 15,
    color: COLORS.MAIN_TEXT,
  },
  currentBalanceTextValue: {
    fontFamily: "Rubik600",
    fontSize: 21,
    color: COLORS.MAIN_RED,
  },
});
