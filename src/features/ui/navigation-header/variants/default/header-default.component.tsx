import { StackHeaderProps } from '@react-navigation/stack'
import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, Text, View } from 'react-native'

import { Icon } from '~features/ui/icon'
import { NavigationHeader } from '~features/ui/navigation-header/navigation-header.component'

import { User } from '~models/user.model'

import styles from './header-default.styles'

type ParamsType = { corresponder?: User } | undefined
export const HeaderDefault: VFC<StackHeaderProps> = ({ navigation, scene }) => {
  const { t } = useTranslation('header')
  const canGoBack = Boolean(navigation.canGoBack())
  const {
    route,
    progress,
    descriptor: { options },
  } = scene
  console.log({ ...route.params })
  const corresponder = (route.params as ParamsType)?.corresponder?.displayName
  return (
    <NavigationHeader progress={progress}>
      <>
        {canGoBack && (
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name={'chevron-left'} color={styles.icon.color} />
          </Pressable>
        )}
        {!canGoBack && <View style={styles.placeholder} />}
        <Text style={styles.title}>{corresponder ?? t(options.title ?? route.name)}</Text>
        <View style={styles.placeholder} />
      </>
    </NavigationHeader>
  )
}
