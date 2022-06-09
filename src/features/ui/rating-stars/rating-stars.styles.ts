import { rgba } from 'polished'
import { StyleSheet } from 'react-native'

import { COLORS } from '~styles/colors'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  containerBackground: {
    backgroundColor: rgba(COLORS.black, 0.5),
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
    color: '#d0a535',
  },
  starHalfWrapper: {
    position: 'absolute',
    right: 1,
  },
})
