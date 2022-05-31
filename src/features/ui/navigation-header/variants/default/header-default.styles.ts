import { StyleSheet } from 'react-native'

import { theme } from '~styles/theme'
import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  title: {
    ...TOPOGRAPHY.labelL,
    color: theme.text,
  },

  iconWrapper: {
    paddingBottom: 12,
  },
  icon: {
    color: theme.text,
  },
  placeholder: {
    width: 22,
  },
  clear: { color: 'white', textAlign: 'center', alignSelf: 'center', paddingLeft: 16 },
})
