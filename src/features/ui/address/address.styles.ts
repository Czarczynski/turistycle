import { StyleSheet } from 'react-native'

import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  address: {
    ...TOPOGRAPHY.paragraph,
    paddingBottom: 8,
    paddingHorizontal: 16,
  },
})
