import { getAuth } from 'firebase/auth'
import { observer } from 'mobx-react-lite'
import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Text, View } from 'react-native'

import useNavigation from '~hooks/useNavigation'
import { changeLaguage } from '~utils/i18n'

import styles from './more.styles'

interface MoreScreenProps {
  title?: string
}

export const MoreScreen: VFC<MoreScreenProps> = observer(({ title = 'MoreScreen' }) => {
  const { t } = useTranslation('more')
  const navigation = useNavigation()
  const logOut = async () => {
    await getAuth().signOut()
    navigation.replace('AuthNavigator', { screen: 'Login' })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button title={'Navigate WebView'} onPress={() => navigation.navigate('WebView')} />
      <Button title={'Navigate Profile'} onPress={() => navigation.navigate('Profile')} />
      <Button
        title={t`change-language.title`}
        onPress={async () => await changeLaguage(t`change-language.to-value`)}
      />
      <Button title={'Log out'} onPress={logOut} />
    </View>
  )
})
