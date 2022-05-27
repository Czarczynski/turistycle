import { useNavigation } from '@react-navigation/native'
import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Text, View } from 'react-native'

import styles from './chat.styles'

interface ChatScreenProps {
  title?: string
}

export const ChatScreen: VFC<ChatScreenProps> = ({ title = 'ChatScreen' }) => {
  const { t } = useTranslation('chat')

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button
        title={'Navigate Conversation'}
        onPress={() => navigation.navigate('ChatNavigator', { screen: 'Conversation' })}
      />
    </View>
  )
}
