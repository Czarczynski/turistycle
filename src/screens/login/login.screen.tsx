import { useNavigation } from '@react-navigation/native'
import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Text, View } from 'react-native'

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
        onPress={() => navigation.navigate('AuthNavigator', { screen: 'Register' })}
      />
    </View>
  )
}
