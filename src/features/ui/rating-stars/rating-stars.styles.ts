import { rgba } from 'polished'
import { StyleSheet } from 'react-native'

import { COLORS } from '~styles/colors'

export default StyleSheet.create({
  container: {
    backgroundColor: rgba(COLORS.black, 0.2),
    flexDirection: 'row',
  },
  star: {
    flexDirection: 'row',
    width: 30,
    margin: 5,
  },
  starHalf: {
    color: 'gold',
  },
  starHalfWrapper: {
    position: 'absolute',
    right: 1,
  },
})
