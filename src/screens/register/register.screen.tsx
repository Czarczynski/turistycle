import { observer } from 'mobx-react-lite'
import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'

import styles from './register.styles'

interface RegisterScreenProps {
  title?: string
}

export const RegisterScreen: VFC<RegisterScreenProps> = observer(({ title = 'RegisterScreen' }) => {
  const { t } = useTranslation('register')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
})
