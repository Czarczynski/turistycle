import { rgba } from 'polished'
import { StyleSheet } from 'react-native'

import layout from '~styles/layout'
import { theme } from '~styles/theme'
import { TOPOGRAPHY } from '~styles/topography'

export default (buttonTitle: string) =>
  StyleSheet.create({
    container: {
      top: -50,
      position: 'absolute',
      width: layout.window.width,
      height: layout.window.height,
      borderRadius: 15,
      backgroundColor: rgba('black', 0.7),
    },
    containerNotExpanded: {
      paddingBottom: 0,
      top: undefined,
      bottom: 50,
      right: 20,
      maxWidth: buttonTitle.length * 7 + 32,
      maxHeight: 46,
    },
    overlay: {
      flex: 1,
    },
    innerContainer: {
      padding: 16,
      backgroundColor: theme.background,
    },
    innerContentContainer: {},
    topLine: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    title: {
      ...TOPOGRAPHY.labelL,
    },
    input: {
      width: '100%',
      height: 50,
      ...TOPOGRAPHY.paragraphL,
      marginBottom: 16,
    },
    inputPlaceholder: {
      color: theme.shadowColor,
    },
  })
