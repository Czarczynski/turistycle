/* eslint-disable */
import React, { VFC } from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import Iconmoon from 'react-native-icomoon'

import icons from '~assets/icons'

import { icons as icomoons } from '~features/ui/icon/icon.types'

import json from '../../../../assets/fonts/icomoon/selection.json'

interface IconProps {
  name: keyof typeof icomoons | keyof typeof icons
  color?: string
  size?: number
  strokeWidth?: number
  style?: StyleProp<ViewStyle>
}

export const Icon: VFC<IconProps> = ({ size, color, strokeWidth, name }) => {
  if (Object.keys(icons).includes(name)) {
    // @ts-ignore
    return icons[name](size, strokeWidth, color)
  }

  if (name === 'chevron-left') {
    return (
      <View style={styles.chevronLeft}>
        <Iconmoon
          iconSet={json}
          name={'chevron-down'}
          size={size}
          strokeWidth={strokeWidth}
          color={color || 'black'}
        />
      </View>
    )
  }

  if (name === 'chevron-right') {
    return (
      <View style={styles.chevronRight}>
        <Iconmoon
          iconSet={json}
          name={'chevron-down'}
          size={size}
          strokeWidth={strokeWidth}
          color={color || 'black'}
        />
      </View>
    )
  }

  if (name === 'send') {
    return (
      <View style={styles.send}>
        <Iconmoon
          iconSet={json}
          name={'send'}
          size={size}
          strokeWidth={strokeWidth}
          color={color || 'black'}
        />
      </View>
    )
  }

  return (
    <Iconmoon
      iconSet={json}
      name={name}
      size={size}
      strokeWidth={strokeWidth}
      color={color || 'black'}
    />
  )
}
const styles = StyleSheet.create({
  chevronLeft: {
    transform: [{ rotate: '90deg' }],
  },
  chevronRight: {
    transform: [{ rotate: '-90deg' }],
  },
  send: {
    transform: [{ rotate: '45deg' }],
  },
})
