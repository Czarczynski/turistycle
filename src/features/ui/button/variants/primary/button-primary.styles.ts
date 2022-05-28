import { StyleSheet } from 'react-native'

import { COLORS } from '~styles/colors'
import { theme } from '~styles/theme'

export default StyleSheet.create({
  container: {
    backgroundColor: theme.primary,
  },
  text: {
    color: COLORS.white,
  },
  icon: {
    color: COLORS.white,
  },
})
