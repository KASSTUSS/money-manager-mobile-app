import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  transactionContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "nowrap",
    backgroundColor: COLORS.TRANSACTION_BG,
    borderRadius: 30,
    minHeight: 60,
  },
  transactionIconContainer: {
    display: "flex",
    paddingTop: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    width: 65,
    borderRightWidth: 1,
    borderRightColor: "#fff",
    borderStyle: "dashed",
  },
  transactionIconCircle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 5,
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  transactionIcon: {
    width: 26,
    height: 26,
  },

  transactionContent: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },

  transactionTitleGroup: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingBottom: 9,
    paddingTop: 9,
    paddingLeft: 10,
    gap: 7,
  },

  transactionCategoryTitle: {
    fontSize: 17,
    lineHeight: 18,
    fontFamily: "Rubik500",
    color: COLORS.MAIN_TEXT,
  },

  accountBadge: {
    alignItems: "center",
    justifyContent: "center",
    height: 18,
    paddingLeft: 18,
    paddingRight: 18,
    borderRadius: 9,
    alignSelf: "flex-start",
  },

  accountName: {
    fontSize: 12,
    fontFamily: "Rubik500",
    color: "#fff",
  },

  dataContainer: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: 'flex-start',
    paddingBottom: 7,
    paddingTop: 7,
    paddingRight: 20,
  },

  transactionDate: {
    textAlign: 'right',
    textTransform: "uppercase",
    fontSize: 12,
    fontFamily: "Rubik500",
    color: COLORS.TRANSACTION_DATE,
    alignSelf: 'flex-end'
  },
  transactionValue: {
    fontSize: 21,
    fontFamily: "Rubik600",
  },
});
