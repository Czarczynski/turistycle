import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import React, { VFC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, Text, View } from 'react-native'

import { Icon } from '~features/ui/icon'
import { NavigationHeader } from '~features/ui/navigation-header/navigation-header.component'

import styles from './header-default.styles'

export const HeaderDefault: VFC<NativeStackHeaderProps> = ({ navigation, route, options }) => {
  const { t } = useTranslation('header')
  const canGoBack = Boolean(navigation.canGoBack())

  return (
    <NavigationHeader>
      <>
        {canGoBack && (
          <Pressable onPress={navigation.goBack}>
            <Icon name={'chevron-down'} color={styles.icon.color} />
          </Pressable>
        )}
        {!canGoBack && <View style={styles.placeholder} />}
        <Text style={styles.title}>{options.title ? options.title : route.name}</Text>
        <View style={styles.placeholder} />
      </>
    </NavigationHeader>
  )
}
