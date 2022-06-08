import { StyleSheet } from 'react-native'

import layout from '~styles/layout'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderWrapper: {
    marginBottom: 16,
    width: layout.window.width - 45,
  },
})
