import { StyleSheet } from 'react-native'

import { theme } from '~styles/theme'
import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 16,
  },
  imagePlaceholder: {
    backgroundColor: theme.tint,
    width: 50,
    height: 50,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginRight: 16,
  },
  text: {},
  letter: {
    ...TOPOGRAPHY.labelXXL,
    color: theme.background,
  },
})
