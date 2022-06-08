import { rgba } from 'polished'
import { StyleSheet } from 'react-native'

import { COLORS } from '~styles/colors'
import { theme } from '~styles/theme'
import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  container: {
    backgroundColor: rgba(COLORS.black, 0.3),
    margin: 5,
    padding: 16,
    borderRadius: 30,
    position: 'absolute',
    right: 0,
    top: 50,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowColor: 'black',
    shadowRadius: 0,
  },
  containerCollapsed: {
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
