import React, { VFC } from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'

import styles from './badge.styles'

interface BadgeProps {
  number: number
  style?: StyleProp<ViewStyle>
}

export const Badge: VFC<BadgeProps> = ({ number, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{number}</Text>
    </View>
  )
}
