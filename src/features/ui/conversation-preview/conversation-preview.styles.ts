import { StyleSheet } from 'react-native'

import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  container: {
    width: '100%',
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  photo: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  innerContainer: {
    paddingLeft: 10,
    flex: 1,
  },
  name: {
    paddingBottom: 5,
    ...TOPOGRAPHY.paragraphL,
  },
  text: {
    ...TOPOGRAPHY.paragraph,
  },
})
