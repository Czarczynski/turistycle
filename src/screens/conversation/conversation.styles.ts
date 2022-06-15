import { StyleSheet } from 'react-native'

import { theme } from '~styles/theme'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.text,
  },
  inputWrapper: {
    height: 50,
    width: '100%',
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
})
