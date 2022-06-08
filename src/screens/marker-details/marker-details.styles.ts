import { StyleSheet } from 'react-native'

import { COLORS } from '~styles/colors'
import { theme } from '~styles/theme'
import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: theme.background,
    alignItems: 'center',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 1,
    shadowColor: COLORS.black,
    shadowRadius: 10,
    borderRadius: 15,
  },
  title: {
    ...TOPOGRAPHY.headerXL,
    paddingBottom: 16,
  },
})
