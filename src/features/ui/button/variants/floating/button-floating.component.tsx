import React, { FC } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import { Button } from '~features/ui/button/button.component'
import { ButtonChildren, ChildrenArgs } from '~features/ui/button/button.component'

import styles from './button-floating.styles'

interface ButtonVariantProps {
  children: string | ((args: ChildrenArgs) => React.ReactElement)
  style?: StyleProp<ViewStyle>
  disabled?: boolean
  isLoading?: boolean
  onPress: () => void | Promise<void>
}

export const ButtonFloating: FC<ButtonVariantProps> = ({ children, style, ...props }) => {
  return (
    <Button {...props} style={[styles.container, style]}>
      <ButtonChildren textStyle={styles.text} iconColor={styles.text.color}>
        {children}
      </ButtonChildren>
    </Button>
  )
}
