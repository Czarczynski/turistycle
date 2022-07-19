import { StyleSheet } from 'react-native'

import { theme } from '~styles/theme'

export default StyleSheet.create({
  card: {
    aspectRatio: 1,
    width: 200,
    shadowRadius: 2,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: theme.shadowColor,
    shadowOpacity: 1,
    borderRadius: 12,
    backgroundColor: theme.background,
  },
  map: { flex: 1, borderRadius: 12 },
})
