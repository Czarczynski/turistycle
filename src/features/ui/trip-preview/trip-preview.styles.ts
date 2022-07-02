import { StyleSheet } from 'react-native'

import { theme } from '~styles/theme'
import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  container: {
    width: '100%',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 1,
    shadowColor: theme.shadowColor,
    shadowRadius: 6,
    backgroundColor: theme.background,
    borderRadius: 10,
  },
  map: {
    borderRadius: 10,
    width: '100%',
    aspectRatio: 1.4,
  },
  innerContainer: {
    top: -16,
    borderRadius: 10,
    padding: 16,
    paddingBottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.background,
  },
  left: {},
  right: {
    justifyContent: 'center',
  },
  icon: {
    color: theme.text,
    width: 25,
  },
  title: {
    ...TOPOGRAPHY.headerL,
    color: theme.tint,
    paddingBottom: 10,
  },
  distance: {
    ...TOPOGRAPHY.label,
    color: theme.borderDark,
  },
})
