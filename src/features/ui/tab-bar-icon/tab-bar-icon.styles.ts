import { StyleSheet } from 'react-native'

import { theme } from '~styles/theme'
import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 12,
  },
  containerInactive: {
    opacity: 0.4,
  },
  iconWrapper: {
    marginTop: 8,
    marginBottom: 3,
    paddingHorizontal: 14,
  },
  icon: { color: theme.text },
  title: {
    ...TOPOGRAPHY.labelXXS,
    color: theme.text,
  },
})
