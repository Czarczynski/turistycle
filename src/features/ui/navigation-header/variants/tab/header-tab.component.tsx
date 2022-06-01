import { StackHeaderProps } from '@react-navigation/stack'
import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'

import { NavigationHeader } from '~features/ui/navigation-header/navigation-header.component'

import styles from './header-tab.styles'

export const HeaderTab: VFC<StackHeaderProps> = ({ scene }) => {
  const { t } = useTranslation('header')
  const {
    route,
    descriptor: { options },
  } = scene

  return (
    <NavigationHeader>
      <>
        <View style={styles.placeholder} />
        <Text style={styles.title}>{t(options.title ?? route.name)}</Text>
        <View style={styles.placeholder} />
      </>
    </NavigationHeader>
  )
}
