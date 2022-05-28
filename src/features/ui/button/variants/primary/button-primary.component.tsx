import React, { FC } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import { Button } from '~features/ui/button/button.component'
import { ButtonChildren, ChildrenArgs } from '~features/ui/button/button.component'

import styles from './button-primary.styles'

interface ButtonVariantProps {
  children: string | ((args: ChildrenArgs) => React.ReactElement)
  style?: StyleProp<ViewStyle>
  disabled?: boolean
  isLoading?: boolean
  onPress: () => void | Promise<void>
}

export const ButtonPrimary: FC<ButtonVariantProps> = ({ children, style, ...props }) => {
  return (
    <Button {...props} style={[styles.container, style]}>
      <ButtonChildren textStyle={styles.text} iconColor={styles.text.color}>
        {children}
      </ButtonChildren>
    </Button>
  )
}
