import React, { FC, VFC } from 'react'
import { ActivityIndicator, Pressable, StyleProp, Text, TextStyle, ViewStyle } from 'react-native'

import styles from './button.styles'

export type ChildrenArgs = { textStyle: StyleProp<TextStyle>; iconColor: string }

interface ButtonProps {
  children: React.ReactElement
  style?: StyleProp<ViewStyle>
  onPress: () => void | Promise<void>
  disabled?: boolean
  isLoading?: boolean
}

export const Button: VFC<ButtonProps> = ({
  onPress,
  style,
  children,
  disabled = false,
  isLoading = false,
}) => {
  return (
    <Pressable
      disabled={disabled}
      style={[disabled && styles.disabled, styles.container, style]}
      onPress={onPress}
    >
      {isLoading ? (
        <ActivityIndicator
          style={styles.activityIndicator}
          color={styles.activityIndicator.color}
        />
      ) : (
        children
      )}
    </Pressable>
  )
}

interface ButtonChildrenProps {
  children: string | ((args: ChildrenArgs) => React.ReactElement)
  textStyle: StyleProp<TextStyle>
  iconColor: string
}

export const ButtonChildren: FC<ButtonChildrenProps> = ({ children, textStyle, iconColor }) => {
  if (typeof children === 'string') {
    return (
      <Text numberOfLines={1} style={[styles.text, textStyle]}>
        {children}
      </Text>
    )
  } else {
    return <>{children({ textStyle: [styles.text, textStyle], iconColor })}</>
  }
}
