import { borderRadius } from 'polished'
import { StyleSheet } from 'react-native'

import layout from '~styles/layout'
import { theme } from '~styles/theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  customView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 15,
    backgroundColor: theme.background,
    position: 'absolute',
    top: 0,
    zIndex: 50,
  },
  customSlider: { marginBottom: 16, width: layout.window.width - 50, borderRadius: 10 },
  // image: {
  //   marginBottom:16,
  //   width: layout.window.width - 64,
  //   borderRadius:10,
  //   resizeMode:'center',
  //   aspectRatio: 2,
  // },
})
