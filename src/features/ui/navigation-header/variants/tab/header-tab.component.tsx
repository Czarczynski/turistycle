import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'

import { RootStackParamList } from '~navigation/index.navigator'
import { RootTabParamList } from '~navigation/root.navigator'

import { NavigationHeaderNoProgress } from '~features/ui/navigation-header/navigation-header.component'

import styles from './header-tab.styles'

interface HeaderTabProps extends BottomTabHeaderProps {
  previous?: keyof RootTabParamList | keyof RootStackParamList
}

export const HeaderTab: VFC<HeaderTabProps> = ({ route, options }) => {
  const { t } = useTranslation('header')

  return (
    <NavigationHeaderNoProgress>
      <>
        <View style={styles.placeholder} />
        <Text style={styles.title}>{options.title ? options.title : route.name}</Text>
        <View style={styles.placeholder} />
      </>
    </NavigationHeaderNoProgress>
  )
}
