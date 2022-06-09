import { StyleSheet } from 'react-native'

import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  container: {
    paddingBottom: 16,
  },
  innerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    ...TOPOGRAPHY.labelL,
  },
  opinion: {
    ...TOPOGRAPHY.paragraph,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
})
