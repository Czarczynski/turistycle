import { StackHeaderProps } from '@react-navigation/stack'
import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, Text, View } from 'react-native'

import { Icon } from '~features/ui/icon'
import { NavigationHeader } from '~features/ui/navigation-header/navigation-header.component'

import styles from './header-card.styles'

export const HeaderCard: VFC<StackHeaderProps> = ({ navigation, scene }) => {
  const { t } = useTranslation('header')
  const canGoBack = Boolean(navigation.canGoBack())
  const {
    route,
    progress,
    descriptor: { options },
  } = scene

  return (
    <NavigationHeader progress={progress} transparent floating>
      <>
        {canGoBack && (
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name={'chevron-down'} color={styles.icon.color} />
          </Pressable>
        )}
        {!canGoBack && <View style={styles.placeholder} />}
        <Text style={styles.title}>{t(options.title ?? route.name)}</Text>
        <View style={styles.placeholder} />
      </>
    </NavigationHeader>
  )
}
