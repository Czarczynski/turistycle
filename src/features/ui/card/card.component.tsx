import { rgba } from 'polished'
import React, { VFC } from 'react'
import { Pressable, Text, View } from 'react-native'

import icons from '~assets/icons'

import { Icon } from '~features/ui/icon'
import { icons as icomoons } from '~features/ui/icon/icon.types'

import { COLORS } from '~styles/colors'
import { theme } from '~styles/theme'

import styles from './card.styles'

interface CardProps {
  title: string
  icon?: keyof typeof icomoons | keyof typeof icons
  color?: string
  backgroundColor?: string
  opacity?: boolean
  onPress?: () => void
}

export const Card: VFC<CardProps> = ({
  title,
  icon,
  backgroundColor = COLORS.white,
  opacity,
  onPress,
  color,
}) => {
  const hasIcon = Boolean(icon)
  const textColor =
    color ?? Boolean(backgroundColor !== COLORS.white) ? theme.background : theme.text
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: rgba(backgroundColor, opacity ? 0.5 : 1),
        },
      ]}
    >
      {hasIcon && (
        <View style={styles.iconWrapper}>
          <Icon name={icon!} size={16} color={textColor} />
        </View>
      )}
      <Text style={{ color: textColor }}>{title}</Text>
    </Pressable>
  )
}
