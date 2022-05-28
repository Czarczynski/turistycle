import { StyleSheet } from 'react-native'

import { theme } from '~styles/theme'

const fontFamilies = {
  montserratRegular: 'montserrat-regular',
  montserratBold: 'montserrat-bold',
  montserratSemiBold: 'montserrat-semi-bold',
}

export const TOPOGRAPHY = StyleSheet.create({
  header: {
    fontFamily: fontFamilies.montserratBold,
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.text,
  },
  label: {
    fontFamily: fontFamilies.montserratSemiBold,
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
  },
  paragraph: {
    fontFamily: fontFamilies.montserratRegular,
    fontSize: 16,
    fontWeight: 'normal',
    color: theme.text,
  },
  paragraphXXS: {
    fontFamily: fontFamilies.montserratRegular,
    fontSize: 10,
    fontWeight: 'normal',
    color: theme.text,
  },
})
