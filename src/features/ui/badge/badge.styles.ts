import { StyleSheet } from 'react-native'

import { COLORS } from '~styles/colors'
import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  container: {
    width: 15,
    height: 15,
    borderRadius: 20,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  title: {
    ...TOPOGRAPHY.paragraphXXS,
    color: COLORS.white,
  },
})
