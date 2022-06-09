import { rgba } from 'polished'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  sliderWrapper: {
    position: 'absolute',
  },
  slider: {
    opacity: 0,
    backgroundColor: rgba('red', 0.3),
    height: 30,
  },
  track: {
    height: 1,
  },
})
