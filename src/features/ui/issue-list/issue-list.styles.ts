import { StyleSheet } from 'react-native'

import { theme } from '~styles/theme'
import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.text,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: theme.borderDark,
    marginVertical: 30,
  },
  header: {
    borderRadius: 15,
    alignItems: 'center',
    borderColor: theme.borderDark,
    borderWidth: 1,
    paddingVertical: 16,
    marginBottom: 16,
  },
  headerIcon: {
    color: theme.primary,
  },
  headerText: {
    paddingTop: 16,
    textAlign: 'center',
    ...TOPOGRAPHY.label,
    color: theme.borderDark,
  },
})
