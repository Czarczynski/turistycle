import { rgba } from 'polished'
import { StyleSheet } from 'react-native'

import { COLORS } from '~styles/colors'
import { theme } from '~styles/theme'
import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  container: {
    backgroundColor: rgba(COLORS.black, 0.5),
    margin: 5,
    borderRadius: 30,
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    top: 50,
  },
  containerCollapsed: {
    aspectRatio: 1,
    height: 43,
  },
  blurContainer: {
    padding: 16,
  },
  blurContainerCollapsed: {
    aspectRatio: 1,
    height: 43,
    padding: 0,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...TOPOGRAPHY.headerXXL,
    color: theme.background,
  },
  pinContainer: {
    marginTop: 16,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  pinImage: {
    marginRight: 16,
    height: 30,
    width: 20,
    resizeMode: 'contain',
  },
  pinTitle: {
    ...TOPOGRAPHY.label,
    color: theme.background,
  },
  subtitle: {
    ...TOPOGRAPHY.header,
    marginTop: 16,
    color: theme.background,
  },
})
