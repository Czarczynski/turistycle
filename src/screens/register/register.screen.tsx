import { observer } from 'mobx-react-lite'
import React, { VFC } from 'react'
import { KeyboardAvoidingView, ScrollView, Text, View } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'

import { AuthBackgroundImage } from '~features/ui/auth-background-image'
import { ButtonSecondaryReversed } from '~features/ui/button'
import { FormInput } from '~features/ui/form-input'

import useNavigation from '~hooks/use-navigation'

import styles from './register.styles'

interface RegisterScreenProps {
  title?: string
}

export const RegisterScreen: VFC<RegisterScreenProps> = observer(({ title = 'RegisterScreen' }) => {
  const navigation = useNavigation()
  return (
    <ScrollView contentContainerStyle={styles.container} scrollEnabled={false}>
      <KeyboardAvoidingView
        behavior={'padding'}
        keyboardVerticalOffset={-70}
        style={{ flex: 1, bottom: -10, zIndex: 1 }}
      >
        <SharedElement id={'auth.bottom'} style={{ flex: 1 }}>
          <View style={styles.innerContainer}>
            <View style={styles.contentWrapper}>
              <FormInput onChangeText={() => null} label={'Label'} />
              <FormInput onChangeText={() => null} label={'Label 2'} />
              <FormInput onChangeText={() => null} label={'Hasło'} />
              <FormInput onChangeText={() => null} label={'Hasło 2'} />
            </View>
          </View>

          <ButtonSecondaryReversed
            onPress={() => navigation.replace('AuthNavigator', { screen: 'Login' })}
          >
            {() => <Text style={styles.buttonSecondary}>Sign In</Text>}
          </ButtonSecondaryReversed>
        </SharedElement>
      </KeyboardAvoidingView>
      <AuthBackgroundImage />
    </ScrollView>
  )
})
