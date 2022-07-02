import { StackHeaderProps } from '@react-navigation/stack'
import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, Text, View } from 'react-native'

import { Icon } from '~features/ui/icon'
import { NavigationHeader } from '~features/ui/navigation-header/navigation-header.component'

import useNavigation from '~hooks/use-navigation'

import styles from './header-tab.styles'

export const HeaderTab: VFC<StackHeaderProps & { isHome?: boolean }> = ({ scene, isHome }) => {
  const { t } = useTranslation('header')
  const navigation = useNavigation()
  const {
    route,
    descriptor: { options },
  } = scene

  return (
    <NavigationHeader>
      <>
        <View style={styles.placeholder} />
        <Text style={styles.title}>{t(options.title ?? route.name)}</Text>
        {!isHome && <View style={styles.placeholder} />}
        {isHome && (
          <Pressable
            onPress={() => navigation.navigate('ChatNavigator', { screen: 'Chat' })}
            style={styles.placeholder}
          >
            <Icon name={'chat'} />
          </Pressable>
        )}
      </>
    </NavigationHeader>
  )
}
