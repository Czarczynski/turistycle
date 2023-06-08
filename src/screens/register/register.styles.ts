import { StyleSheet } from 'react-native'

import layout from '~styles/layout'
import { theme } from '~styles/theme'
import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 120,
    backgroundColor: theme.background,
  },
  backgroundImage: {
    width: layout.window.width,
    height: layout.window.width * (490 / 938),
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
  },
  contentWrapper: {
    paddingHorizontal: 16,
    backgroundColor: theme.background,
  },
  backgroundWrapper: {
    height: layout.window.height - 120,
  },
  buttonSecondary: {
    ...TOPOGRAPHY.paragraphS,
    color: theme.tint,
  },
})
