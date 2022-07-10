import { StyleSheet } from 'react-native'

import { theme } from '~styles/theme'
import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
