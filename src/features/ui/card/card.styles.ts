import { StyleSheet } from 'react-native'

import { theme } from '~styles/theme'

export default StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: theme.shadowColor,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 3,
    shadowOpacity: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.text,
  }, iconWrapper: {
    paddingRight:10
  }

})
