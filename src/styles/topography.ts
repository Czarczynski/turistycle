import { StyleSheet } from 'react-native'

import { theme } from '~styles/theme'

const fontFamilies = {
  montserratRegular: 'montserrat-regular',
  montserratBold: 'montserrat-bold',
  montserratSemiBold: 'montserrat-semi-bold',
}

export const TOPOGRAPHY = StyleSheet.create({
  /** headers */
  header: {
    fontFamily: fontFamilies.montserratBold,
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.text,
  },
  /** labels */
  labelL: {
    fontFamily: fontFamilies.montserratSemiBold,
    fontSize: 20,
    fontWeight: '600',
    color: theme.text,
  },
  label: {
    fontFamily: fontFamilies.montserratSemiBold,
    fontSize: 16,
    fontWeight: '600',
    color: theme.text,
  },
  /** paragraphL */
  paragraphL: {
    fontFamily: fontFamilies.montserratRegular,
    fontSize: 18,
    fontWeight: 'normal',
    color: theme.text,
  },
  paragraph: {
    fontFamily: fontFamilies.montserratRegular,
    fontSize: 16,
    fontWeight: 'normal',
    color: theme.text,
  },
  paragraphS: {
    fontFamily: fontFamilies.montserratRegular,
    fontSize: 14,
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
