import { StyleSheet } from 'react-native'

import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  contentContainer: {
    padding: 16,
    alignItems: 'center',
  },
  title: {
    ...TOPOGRAPHY.labelL,
    paddingLeft: 16,
  },
  separator: {
    width: 16,
  },
})
