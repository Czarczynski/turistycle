import { StyleSheet } from 'react-native'

import { theme } from '~styles/theme'
import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  iconWrapper: {
    width: '40%',
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    bottom: 16,
  },
  card: {
    width: '100%',
    padding: 16,
    shadowRadius: 2,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: theme.shadowColor,
    shadowOpacity: 1,
    backgroundColor: theme.background,
    borderRadius: 12,
  },
  cardTitle: {
    ...TOPOGRAPHY.labelXL,
    color: theme.secondary,
  },
  cardBody: {
    ...TOPOGRAPHY.labelL,
    paddingVertical: 16,
    color: theme.text,
  },
})
