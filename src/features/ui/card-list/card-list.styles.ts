import { StyleSheet } from 'react-native'

import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  contentContainer: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    ...TOPOGRAPHY.labelL,
    paddingBottom: 16,
    paddingLeft: 16,
  },
  separator: {
    width: 16,
  },
})
