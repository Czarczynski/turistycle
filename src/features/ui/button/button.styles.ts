import { StyleSheet } from 'react-native'

import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  text: {
    ...TOPOGRAPHY.label,
  },
  disabled: { opacity: 0.5 },
  activityIndicator: {
    height: 23,
    color: 'white',
  },
})
