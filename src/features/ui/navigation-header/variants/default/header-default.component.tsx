import { StackHeaderProps } from '@react-navigation/stack'
import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, Text, View } from 'react-native'

import { RootStackParamList } from '~navigation/index.navigator'
import { RootTabParamList } from '~navigation/root.navigator'

import { Icon } from '~features/ui/icon'
import { NavigationHeader } from '~features/ui/navigation-header/navigation-header.component'

import styles from './header-default.styles'

interface HeaderDefaultProps extends StackHeaderProps {
  previous?: keyof RootTabParamList | keyof RootStackParamList
}

export const HeaderDefault: VFC<HeaderDefaultProps> = ({
  navigation,
  route,
  options,
  previous,
  progress,
}) => {
  const { t } = useTranslation('header')
  const canGoBack = Boolean(navigation.canGoBack())

  return (
    <NavigationHeader progress={progress}>
      <>
        {canGoBack && (
          <Pressable onPress={previous ? () => navigation.navigate(previous) : navigation.goBack}>
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
