import { StyleSheet } from 'react-native'

import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  distanceContainer: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  label: {
    ...TOPOGRAPHY.labelL,
    paddingLeft: 16,
    paddingBottom: 16,
  },
})
