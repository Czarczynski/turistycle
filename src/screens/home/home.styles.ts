import { StyleSheet } from 'react-native'

import { THEMES as theme } from '~styles/theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.light.text,
  },
})
