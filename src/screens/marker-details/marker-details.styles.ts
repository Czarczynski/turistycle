import { StyleSheet } from 'react-native'

import { theme } from '~styles/theme'
import { TOPOGRAPHY } from '~styles/topography'

export default StyleSheet.create({
  container: {
    flex: 1,
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 1,
    shadowColor: theme.borderDark,
    shadowRadius: 10,
  },
  dragger: {
    margin: 16,
    alignSelf: 'center',
    height: 5,
    borderRadius: 15,
    backgroundColor: theme.text,
    width: '30%',
  },
  contentContainer: {
    padding: 16,
    backgroundColor: theme.background,
    borderRadius: 15,
    flex: 1,
    alignItems: 'center',
  },
  title: {
    ...TOPOGRAPHY.headerXL,
    paddingBottom: 16,
  },
  section: {
    paddingTop: 16,
    width: '100%',
    alignItems: 'flex-start',
  },
  sectionPlus: {
    paddingTop: 16,
    width: '100%',
    alignItems: 'flex-start',
    flex: 1,
  },
  subtitle: {
    ...TOPOGRAPHY.header,
    paddingBottom: 16,
  },
})
