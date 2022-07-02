import { observer } from 'mobx-react-lite'
import React, { VFC } from 'react'
import { Button, Text, View } from 'react-native'

import useNavigation from '~hooks/use-navigation'

import styles from './register.styles'

interface RegisterScreenProps {
  title?: string
}

export const RegisterScreen: VFC<RegisterScreenProps> = observer(({ title = 'RegisterScreen' }) => {
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
