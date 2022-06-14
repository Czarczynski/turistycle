import { rgba } from 'polished'
import { StyleSheet } from 'react-native'

import { theme } from '~styles/theme'
import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    width: '100%',
    backgroundColor: rgba(theme.background, 0.2),
  },
  input: {
    ...TOPOGRAPHY.labelL,
    lineHeight: 28,
    flex: 1,
    marginVertical: 5,
    padding: 10,
    borderRadius: 15,
    maxHeight: 20 + 28 * 3,
    color: theme.background,
    backgroundColor: rgba(theme.text, 0.4),
  },
  button: {
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    paddingLeft: 10,
    paddingBottom: 10,
    transform: [{ rotate: '45deg' }],
  },
  icon: {
    color: theme.text,
  },
})
