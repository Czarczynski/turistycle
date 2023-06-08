import { observer } from 'mobx-react-lite'
import React, { VFC, useEffect } from 'react'
import { ScrollView} from 'react-native'


import { useGoogleLogIn } from '~features/auth/hooks/use-auth'
import { AuthBackgroundImage } from '~features/ui/auth-background-image'
import { AuthLoginSection } from '~features/ui/auth-login-section'

import useIsMount from '~hooks/use-is-mount'
import useNavigation from '~hooks/use-navigation'
import { useStores } from '~hooks/use-store'

import styles from './login.styles'

interface LoginScreenProps {}

export const LoginScreen: VFC<LoginScreenProps> = observer(() => {
  const navigation = useNavigation()
  const isMount = useIsMount()
  const { global } = useStores()
  const [logIn] = useGoogleLogIn(global)

  useEffect(() => {
    if (!isMount) {
      return
    }

    if (global.user) {
      navigation.replace('Root', { screen: 'HomeTab', params: { Home: undefined } })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [global.user])
  return (
    <ScrollView contentContainerStyle={styles.container} scrollEnabled={false}>
      <AuthBackgroundImage />
      <AuthLoginSection googleLogIn={logIn} />
    </ScrollView>
  )
})
