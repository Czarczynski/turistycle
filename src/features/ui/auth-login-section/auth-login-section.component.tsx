import React, { VFC, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Keyboard, KeyboardAvoidingView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SharedElement } from 'react-navigation-shared-element'

import { ButtonPrimary, ButtonSecondaryReversed, ButtonSocialIcon } from '~features/ui/button'
import { FormInput } from '~features/ui/form-input'

import useNavigation from '~hooks/use-navigation'

import styles from './auth-login-section.styles'

interface AuthLoginSectionProps {
  googleLogIn: () => void
}

export const AuthLoginSection: VFC<AuthLoginSectionProps> = ({ googleLogIn }) => {
  const { t } = useTranslation('auth-login-section')
  const navigation = useNavigation()

  const goRegister = () => navigation.replace('AuthNavigator', { screen: 'Register' })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const signUpText = useCallback(() => <Text style={styles.buttonSecondary}>Sign Up</Text>, [])

  return (
    <KeyboardAvoidingView
      behavior={'padding'}
      style={styles.sharedElements}
      keyboardVerticalOffset={-170}
    >
      <SharedElement id={'auth.bottom'} style={styles.sharedElements}>
        <SafeAreaView edges={['bottom']} style={styles.innerContainer}>
          <View style={styles.contentWrapper}>
            <FormInput
              onChangeText={() => null}
              label={'Label'}
              textContentType={'emailAddress'}
              returnKeyType={'next'}
            />
            <FormInput onChangeText={() => null} label={'Label 2'} textContentType={'password'} />
            <ButtonPrimary onPress={() => {}}>Sign in</ButtonPrimary>
            <Text style={styles.orText}>—— or ——</Text>
            <ButtonSocialIcon icon={'google'} onPress={googleLogIn} />
            <ButtonSecondaryReversed onPress={goRegister}>{signUpText}</ButtonSecondaryReversed>
          </View>
        </SafeAreaView>
      </SharedElement>
    </KeyboardAvoidingView>
  )
}
