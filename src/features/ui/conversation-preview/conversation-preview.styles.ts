import { StyleSheet } from 'react-native'

import { theme } from '~styles/theme'
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
  imagePlaceholder: {
    backgroundColor: theme.tint,
    width: 60,
    height: 60,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  letter: {
    ...TOPOGRAPHY.labelXXL,
    color: theme.background,
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
