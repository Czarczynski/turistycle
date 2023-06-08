import { StyleSheet } from 'react-native'

import layout from '~styles/layout'
import { theme } from '~styles/theme'
import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  innerContainer: {
    flex: 1,
    backgroundColor: theme.tint,
    justifyContent: 'flex-end',
  },
  sharedElements: {
    flex: 1,
  },
  contentWrapper: {
    borderRadius: 20,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    padding: 16,
    backgroundColor: theme.background,
  },
  backgroundWrapper: {
    height: layout.window.height - 120,
  },
  buttonSecondary: {
    ...TOPOGRAPHY.paragraphS,
    color: theme.tint,
  },
  orText: {
    paddingTop: 10,
    textAlign: 'center',
  },
})
