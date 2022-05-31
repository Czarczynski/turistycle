import { useNavigation, useRoute } from '@react-navigation/native'
import { StackHeaderProps } from '@react-navigation/stack'
import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'

import { RootStackParamList } from '~navigation/index.navigator'
import { RootTabParamList } from '~navigation/root.navigator'

import { NavigationHeader } from '~features/ui/navigation-header/navigation-header.component'

import styles from './header-tab.styles'

export const HeaderTab: VFC<StackHeaderProps> = ({}) => {
  const { t } = useTranslation('header')
  const navigation = useNavigation()
  const route = useRoute()

  return (
    <NavigationHeader>
      <>
        <View style={styles.placeholder} />
        <Text style={styles.title}>{route.name}</Text>
        <View style={styles.placeholder} />
      </>
    </NavigationHeader>
  )
}
