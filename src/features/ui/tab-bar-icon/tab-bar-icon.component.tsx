import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Animated, Text, View } from 'react-native'

import icons from '~assets/icons'

import { Icon } from '~features/ui/icon'
import { icons as icomoons } from '~features/ui/icon/icon.types'

import styles from './tab-bar-icon.styles'

interface TabBarIconProps {
  title: string
  focused: boolean
  color?: string
  size?: number
}

const mapIcons: { [title: string]: keyof typeof icomoons | keyof typeof icons } = {
  HomeTab: 'home',
  SearchTab: 'loop',
  MapTab: 'pin',
  SavedTab: 'heart',
  MoreTab: 'hamburger',
}

export const TabBarIcon: VFC<TabBarIconProps> = ({ title, focused }) => {
  const { t } = useTranslation('tab-bar-icon')
  return (
    <View style={[styles.container, Boolean(!focused) && styles.containerInactive]}>
      <Animated.View style={styles.iconWrapper}>
        <Icon
          name={mapIcons[title]}
          color={styles.icon.color}
          size={focused ? 30 : 22}
          strokeWidth={5}
        />
      </Animated.View>
      {!focused && <Text style={styles.title}>{t(title)}</Text>}
    </View>
  )
}
