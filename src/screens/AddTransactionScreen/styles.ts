import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";

export const styles = StyleSheet.create({
  addTransactionContainer: {
    paddingTop: 35,
    paddingLeft: 20,
    paddingRight: 20,
  },

  formContainer: {
    alignItems: "center",
    gap: 20,
  },

  input: {
    width: '100%',
  },

  errorContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 30,
  },

  errorText: {
    fontFamily: 'Rubik500',
    fontSize: 21,
    textAlign: 'center',
    color: COLORS.MAIN_TEXT,
  }

});
