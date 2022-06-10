import { StyleSheet } from 'react-native'

import { theme } from '~styles/theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 1,
    shadowColor: theme.borderDark,
    shadowRadius: 10,
  },
  dragger: {
    margin: 16,
    alignSelf: 'center',
    height: 5,
    borderRadius: 15,
    backgroundColor: theme.text,
    width: '30%',
  },
  webContainer: {
    backgroundColor: theme.background,
    borderRadius: 15,
  },
})
