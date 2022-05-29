import { StyleSheet } from "react-native";
import {theme} from "~styles/theme";

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  trackColorFalse: { color: theme.background },
  trackColorTrue: { color: theme.tint },
})
