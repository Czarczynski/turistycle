import { getAuth } from 'firebase/auth'
import React, { VFC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { KeyboardAvoidingView, View } from 'react-native'

import { useSendNewTroubleshooting } from '~features/troubleshooting/hooks/use-send-new-troubleshooting'
import { ButtonPrimary } from '~features/ui/button'
import { FormInput } from '~features/ui/form-input'

import styles from './new-troubleshooting.styles'

interface NewTroubleshootingScreenProps {}

export const NewTroubleshootingScreen: VFC<NewTroubleshootingScreenProps> = () => {
  const { mutateAsync } = useSendNewTroubleshooting(getAuth().currentUser!)
  const [form, setForm] = useState({
    title: '',
    body: '',
  })
  const { t } = useTranslation('new-troubleshooting')
  const validator = (text: string) => Boolean(text && text.trim())

  const isButtonDisabled = !validator(form.title) || !validator(form.body)

  const sendIssue = async () => {
    await mutateAsync(form)
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.form}>
        <FormInput
          label={t`title`}
          onChangeText={(val) => setForm((state) => ({ ...state, title: val }))}
        />
        <FormInput
          label={t`description`}
          multiline
          onChangeText={(val) => setForm((state) => ({ ...state, body: val }))}
        />
      </View>
      <ButtonPrimary disabled={isButtonDisabled} onPress={sendIssue}>
        {t`send`}
      </ButtonPrimary>
    </KeyboardAvoidingView>
  )
}
