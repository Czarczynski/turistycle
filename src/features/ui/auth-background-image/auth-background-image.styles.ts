import { StyleSheet } from 'react-native'

import layout from '~styles/layout'
import { theme } from '~styles/theme'

export default StyleSheet.create({
  container: {
    width: layout.window.width,
    height: layout.window.width * (490 / 938),
  },
})
