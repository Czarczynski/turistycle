import { StyleSheet } from 'react-native'

import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  search: {
    flex: 1,
    ...TOPOGRAPHY.paragraphL,
    height: '80%',
    borderBottomWidth: 1,
  },
})
