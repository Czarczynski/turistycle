import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Text, View } from 'react-native'

import useNavigation from '~hooks/useNavigation'

import styles from './login.styles'

interface LoginScreenProps {
  title?: string
}

export const LoginScreen: VFC<LoginScreenProps> = ({ title = 'LoginScreen' }) => {
  const { t } = useTranslation('login')
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button
        title={'Navigate Auth'}
        onPress={() => navigation.replace('AuthNavigator', { screen: 'Register' })}
      />
    </View>
  )
}
