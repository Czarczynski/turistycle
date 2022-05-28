import { StyleSheet } from 'react-native'

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
  },
  label: {
    fontFamily: fontFamilies.montserratSemiBold,
    fontSize: 16,
    fontWeight: '600',
  },
  paragraph: {
    fontFamily: fontFamilies.montserratRegular,
    fontSize: 16,
    fontWeight: 'normal',
  },
})
