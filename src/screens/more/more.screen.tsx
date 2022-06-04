import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react-lite'
import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Text, View } from 'react-native'

import styles from './more.styles'

interface MoreScreenProps {
  title?: string
}

export const MoreScreen: VFC<MoreScreenProps> = observer(({ title = 'MoreScreen' }) => {
  const { t } = useTranslation('more')
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button title={'Navigate WebView'} onPress={() => navigation.navigate('WebView')} />
      <Button title={'Navigate Profile'} onPress={() => navigation.navigate('Profile')} />
    </View>
  )
})
