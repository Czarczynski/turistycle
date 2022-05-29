import React, { VFC } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import icons from '~assets/icons'

import { Button } from '~features/ui/button/button.component'
import { ButtonChildren } from '~features/ui/button/button.component'
import { Icon } from '~features/ui/icon'

import styles from './button-social-icon.styles'

interface ButtonVariantProps {
  style?: StyleProp<ViewStyle>
  icon: keyof typeof icons
  disabled?: boolean
  isLoading?: boolean
  onPress: () => void
}

export const ButtonSocialIcon: VFC<ButtonVariantProps> = ({ icon, style, ...props }) => {
  return (
    <Button {...props} style={[styles.container, style]}>
      <ButtonChildren textStyle={styles.text} iconColor={styles.text.color}>
        {() => <Icon name={icon} size={30} />}
      </ButtonChildren>
    </Button>
  )
}
