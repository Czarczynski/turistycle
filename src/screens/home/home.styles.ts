import { StyleSheet } from 'react-native'

import layout from '~styles/layout'

export default StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    paddingTop: 180,
    justifyContent: 'flex-start',
  },
  list: {
    width: layout.window.width,
    left: -16,
  },
  listContainer: {
    flexGrow: 1,
    padding: 16,
  },
  separator: {
    width: 16,
  },
})
