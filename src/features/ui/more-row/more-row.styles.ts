import { StyleSheet } from 'react-native'

import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    ...TOPOGRAPHY.labelL,
  },
  flag: {
    paddingRight: 8,
    transform: [{ scale: 2 }],
  },
})
