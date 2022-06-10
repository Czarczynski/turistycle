import * as Haptics from 'expo-haptics'
import { ImpactFeedbackStyle } from 'expo-haptics'
import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
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
  checked?: boolean
  onPress?: () => void
}

export const Card: VFC<CardProps> = ({
  title,
  icon,
  backgroundColor = COLORS.white,
  checked,
  onPress,
  color,
}) => {
  const hasIcon = Boolean(icon)
  const textColor = color ? color : backgroundColor !== COLORS.white ? theme.background : theme.text
  const { t } = useTranslation('card')
  const onHapticPress = async () => {
    if (onPress !== undefined) {
      await Haptics.impactAsync(ImpactFeedbackStyle.Light)
      onPress()
    }
  }
  return (
    <Pressable
      onPress={onHapticPress}
      style={[
        styles.container,
        {
          backgroundColor,
        },
        checked && styles.checkedContainer,
      ]}
    >
      {hasIcon && (
        <View style={styles.iconWrapper}>
          <Icon name={icon!} size={16} color={textColor} />
        </View>
      )}
      <Text style={{ color: textColor }}>{t(title)}</Text>
    </Pressable>
  )
}
