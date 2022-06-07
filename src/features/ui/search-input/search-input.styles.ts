import { StyleSheet } from 'react-native'

import { theme } from '~styles/theme'
import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  container: {
    backgroundColor: theme.background,
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    ...TOPOGRAPHY.paragraphXL,
    flex: 1,
    paddingHorizontal: 16,
    color: theme.text,
  },
})
