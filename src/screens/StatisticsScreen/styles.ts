import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  chartsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    padding: 25,
    paddingBottom: 110,
  },

  chartsTitle: {
    fontFamily: 'Rubik500',
    fontSize: 16,
    color: COLORS.MAIN_TEXT,
    marginBottom: 15,
  }
});
