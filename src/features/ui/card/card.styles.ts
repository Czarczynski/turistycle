import { StyleSheet } from 'react-native'

import { theme } from '~styles/theme'

export default StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    opacity: 0.5,
    shadowRadius: 2,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: theme.shadowColor,
    shadowOpacity: 1,
  },
  checkedContainer: {
    opacity: 1,
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
