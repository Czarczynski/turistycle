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
  appliedContainer: {
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  appliedContentContainer: {
    paddingBottom: 16,
    marginHorizontal: 16,
  },
  label: {
    ...TOPOGRAPHY.labelL,
    paddingLeft: 16,
    paddingBottom: 16,
  },
  applied: {
    ...TOPOGRAPHY.label,
    paddingLeft: 16,
    paddingBottom: 16,
  },
})
