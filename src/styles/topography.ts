import { StyleSheet } from 'react-native'

import { theme } from '~styles/theme'

const fontFamilies = {
  montserratRegular: 'montserrat-regular',
  montserratBold: 'montserrat-bold',
  montserratSemiBold: 'montserrat-semi-bold',
}

export const TOPOGRAPHY = StyleSheet.create({
  /** headers */
  headerXXL: {
    fontFamily: fontFamilies.montserratBold,
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.text,
  },
  headerXL: {
    fontFamily: fontFamilies.montserratBold,
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.text,
  },
  headerL: {
    fontFamily: fontFamilies.montserratBold,
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.text,
  },
  header: {
    fontFamily: fontFamilies.montserratBold,
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.text,
  },
  /** labels */
  labelXXL: {
    fontFamily: fontFamilies.montserratSemiBold,
    fontSize: 28,
    fontWeight: '600',
    color: theme.text,
  },
  labelXL: {
    fontFamily: fontFamilies.montserratSemiBold,
    fontSize: 24,
    fontWeight: '600',
    color: theme.text,
  },
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
  labelS: {
    fontFamily: fontFamilies.montserratSemiBold,
    fontSize: 10,
    fontWeight: '600',
    color: theme.text,
  },
  /** paragraphL */
  paragraphXL: {
    fontFamily: fontFamilies.montserratRegular,
    fontSize: 22,
    fontWeight: 'normal',
    color: theme.text,
  },
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
