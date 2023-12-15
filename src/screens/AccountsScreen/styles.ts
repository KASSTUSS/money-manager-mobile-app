import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  scrollContainer: {
    minHeight: "100%",
  },
  accountGroups: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.MAIN_TEXT,
    borderStyle: "dotted",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    padding: 25,
  },

  accountGroup: {
    width: "100%",
    gap: 13,
  },

  accountGroupTitle: {
    marginLeft: 20,

    fontFamily: "Rubik500",
    fontSize: 16,
    color: COLORS.MAIN,
  },

  accountsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
  },

  statisticsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    padding: 25,
    paddingBottom: 110,
  },
});
