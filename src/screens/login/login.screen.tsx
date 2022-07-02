import { observer } from 'mobx-react-lite'
import React, { VFC, useEffect } from 'react'
import { Button, Text, View } from 'react-native'

import { useGoogleLogIn } from '~features/auth/hooks/use-auth'
import { ButtonSocialIcon } from '~features/ui/button'

import useIsMount from '~hooks/use-is-mount'
import useNavigation from '~hooks/use-navigation'
import { useStores } from '~hooks/use-store'

import styles from './login.styles'

interface LoginScreenProps {
  title?: string
}

export const LoginScreen: VFC<LoginScreenProps> = observer(({ title = 'LoginScreen' }) => {
  const navigation = useNavigation()
  const isMount = useIsMount()
  const { global } = useStores()
  const [logIn] = useGoogleLogIn(global)

  useEffect(() => {
    if (!isMount) {
      return
    }

    navigation.replace('Root', { screen: 'HomeTab', params: { Home: undefined } })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [global.user])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button
        title={'Navigate Auth'}
        onPress={() => navigation.replace('AuthNavigator', { screen: 'Register' })}
      />
      <ButtonSocialIcon icon={'google'} onPress={() => logIn()} />
    </View>
  )
})
