import { StyleSheet } from 'react-native'

import { theme } from '~styles/theme'

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    paddingBottom: 16,
    paddingTop: 14,
    paddingLeft: 16,
    paddingRight: 14,
    backgroundColor: theme.tint,
    flex: undefined,
    width: 'auto',
    borderRadius: 100,
  },
  text: {
    color: theme.background,
  },
  icon: {
    color: theme.background,
  },
})
