---
to: src/features/<%= section %>/<%= h.changeCase.paramCase(name) %>/<%= h.changeCase.paramCase(name) %>.styles.ts
unless_exists: true
---

import { StyleSheet } from "react-native";
import {theme} from "~styles/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.text,
  },
})
