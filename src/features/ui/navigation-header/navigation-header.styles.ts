import { StyleSheet } from 'react-native'

import { theme } from '~styles/theme'

export default StyleSheet.create({
  container: {
    backgroundColor: theme.background,
  },
  containerTransparent: {
    backgroundColor: 'transparent',
  },
  innerContainer: {
    height: 60,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
    justifyContent: 'space-between',
  },
  innerContainerFloating: {
    position: 'absolute',
    paddingHorizontal: 16,
  },
})
