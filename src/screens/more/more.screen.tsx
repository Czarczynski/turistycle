import { getAuth } from 'firebase/auth'
import { observer } from 'mobx-react-lite'
import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollView, View } from 'react-native'

import { ButtonSecondaryReversed } from '~features/ui/button'
import { MoreRow } from '~features/ui/more-row'

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
  const changeLang = async () => await changeLaguage(t`change-language.to-value`)
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <MoreRow title={t`account`} onPress={() => navigation.navigate('Profile')} />
        <MoreRow
          title={t`messages`}
          onPress={() => navigation.navigate('ChatNavigator', { screen: 'Chat' })}
        />
        <MoreRow title={t`info`} onPress={() => navigation.navigate('WebView', { uri: 'info' })} />
        <MoreRow title={t`troubleshooting`} onPress={() => navigation.navigate('Profile')} />
        <MoreRow title={t`change-language.title`} flag onPress={changeLang} />
      </ScrollView>
      <ButtonSecondaryReversed onPress={logOut}>{t`log-out`}</ButtonSecondaryReversed>
    </View>
  )
})
