import { observer } from 'mobx-react-lite'
import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Text, View } from 'react-native'

import styles from './register.styles'
import useNavigation from "~hooks/useNavigation";

interface RegisterScreenProps {
  title?: string
}

export const RegisterScreen: VFC<RegisterScreenProps> = observer(({ title = 'RegisterScreen' }) => {
  const { t } = useTranslation('register')
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button
        title={'Navigate Login'}
        onPress={() => navigation.replace('AuthNavigator', { screen: 'Login' })}
      />
    </View>
  )
})
