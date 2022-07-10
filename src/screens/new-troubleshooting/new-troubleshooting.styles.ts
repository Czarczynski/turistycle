import { StyleSheet } from 'react-native'

import { theme } from '~styles/theme'
import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 110,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.text,
  },
  form: {},
  input: {
    ...TOPOGRAPHY.paragraphXL,
    width: '100%',
    borderColor: theme.borderDark,
    borderWidth: 2,
    padding: 12,
    color: theme.text,
    borderRadius: 15,
    marginBottom: 32,
  },
  inputMultiline: {
    paddingTop: 12,
    height: 200,
  },
  inputActive: {
    borderColor: theme.text,
    color: theme.text,
  },
  label: {
    paddingLeft: 10,
    paddingBottom: 5,
    letterSpacing: 0.4,
    ...TOPOGRAPHY.labelL,
    color: theme.borderDark,
  },
})
