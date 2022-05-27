import { useNavigation } from '@react-navigation/native'
import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Text, View } from 'react-native'

import styles from './home.styles'

interface HomeScreenProps {
  title?: string
}

export const HomeScreen: VFC<HomeScreenProps> = ({ title = 'HomeScreen' }) => {
  const { t } = useTranslation('home')
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button
        title={'Navigate Chat'}
        onPress={() => navigation.navigate('ChatNavigator', { screen: 'Chat' })}
      />
      <Button
        title={'Navigate Auth'}
        onPress={() => navigation.navigate('AuthNavigator', { screen: 'Login' })}
      />
      <Button title={'Go Storybook'} onPress={() => navigation.navigate('Storybook')} />
    </View>
  )
}
