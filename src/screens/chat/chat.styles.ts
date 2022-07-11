import { StyleSheet } from 'react-native'

import { theme } from '~styles/theme'

export default StyleSheet.create({
  container: {
    paddingTop: 110,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.text,
  }, button: {
    aspectRatio:1,
    paddingRight:18,
    paddingBottom:18,
  }

})
