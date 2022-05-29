/* eslint-disable */
import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleProp, ViewStyle } from 'react-native'
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
  const { t } = useTranslation('icon')
  return Object.keys(icons).includes(name) ? (
    // @ts-ignore
    icons[name](size)
  ) : (
    <Iconmoon
      iconSet={json}
      name={name}
      size={size}
      strokeWidth={strokeWidth}
      color={color || 'black'}
    />
  )
}
