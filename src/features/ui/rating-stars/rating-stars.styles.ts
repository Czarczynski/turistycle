import { rgba } from 'polished'
import { StyleSheet } from 'react-native'

import { COLORS } from '~styles/colors'

export default StyleSheet.create({
  container: {
    backgroundColor: rgba(COLORS.black, 0.5),
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  star: {
    flexDirection: 'row',
    width: 20,
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
