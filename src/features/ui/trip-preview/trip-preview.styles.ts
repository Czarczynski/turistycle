import { StyleSheet } from 'react-native'

import { theme } from '~styles/theme'
import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.background,
    borderRadius: 15,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowColor: theme.shadowColor,
    shadowRadius: 6,
  },
  map: {
    borderRadius: 10,
    width: '100%',
    aspectRatio: 1.2,
  },
  title: {
    ...TOPOGRAPHY.headerL,
    color: theme.tint,
  },
  innerContainer: {
    padding: 16,
  },
})
