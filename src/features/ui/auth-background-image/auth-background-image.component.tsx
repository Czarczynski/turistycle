import React, { VFC } from 'react'
import { Image } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'

import Background from '~assets/images/background.png'

import styles from './auth-background-image.styles'

interface AuthBackgroundImageProps {}

export const AuthBackgroundImage: VFC<AuthBackgroundImageProps> = () => {
  return (
    <SharedElement id={'auth.background'}>
      <Image source={Background} style={styles.container} />
    </SharedElement>
  )
}
