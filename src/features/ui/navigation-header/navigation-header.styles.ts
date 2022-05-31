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
    justifyContent: 'space-between',
  },
  innerContainerFloating: {
    backgroundColor: theme.background,
    marginHorizontal: 16,
    borderRadius: 15,
  },
})
