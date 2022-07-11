import { StyleSheet } from 'react-native'

import { COLORS } from '~styles/colors'
import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  container: {
    zIndex: 99999,
    elevation: 99,
    width: '90%',
    minHeight: 70,
    borderRadius: 20,
    padding: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  success: {
    backgroundColor: COLORS.green,
    color: COLORS.white,
  },
  error: {
    backgroundColor: COLORS.red,
    color: COLORS.white,
  },
  info: {
    backgroundColor: COLORS.white,
    color: COLORS.offBlack,
  },
  title: {
    ...TOPOGRAPHY.labelL,
  },
  description: {
    ...TOPOGRAPHY.paragraph,
  },
})
