import { StyleSheet } from 'react-native'

import { theme } from '~styles/theme'

export default StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.text,
  },
  iconWrapper: {
    paddingRight: 10,
  },
})
