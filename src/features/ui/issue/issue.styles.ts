import { StyleSheet } from 'react-native'

import { theme } from '~styles/theme'
import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    overflow: 'hidden',
  },
  containerExpanded: {
    maxHeight: undefined,
  },
  innerContainer: {
    width: '100%',
    maxHeight: 100,
    overflow: 'hidden',
  },
  title: {
    ...TOPOGRAPHY.headerL,
    color: theme.text,
  },
  date: {
    ...TOPOGRAPHY.labelS,
    color: theme.textSecondary,
  },
  description: {
    padding: 10,
    ...TOPOGRAPHY.paragraphL,
    color: theme.text,
  },
  dots: {
    paddingVertical: 10,
    flexDirection: 'row',
    width: 30,
    justifyContent: 'space-between',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 10,
    backgroundColor: theme.borderDark,
  },
})
