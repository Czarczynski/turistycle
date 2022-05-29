import { useNavigation } from '@react-navigation/native'
import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Image, Pressable, Text, View } from 'react-native'

import { Conversation as ConversationModel } from '~models/conversation.model'

import styles from './conversation-preview.styles'

interface ConversationPreviewProps {
  userUid: string
  conversation: ConversationModel
}

export const ConversationPreview: VFC<ConversationPreviewProps> = ({ userUid, conversation }) => {
  const { t } = useTranslation('conversation-preview')
  const navigation = useNavigation()
  const { users, lastMessage } = conversation
  const isLastMessageOwner = Boolean(lastMessage.senderUid === userUid)
  const corresponder = users.find((user) => user.uid !== userUid)!

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate('ChatNavigator', {
          screen: 'Conversation',
          params: { corresponderUid: corresponder.uid },
        })
      }
    >
      <Image source={{ uri: corresponder.imageUri }} style={styles.photo} />
      <View style={styles.innerContainer}>
        <Text style={styles.name}>{corresponder.displayName}</Text>
        <Text style={styles.text}>
          {isLastMessageOwner && t`you`}
          {lastMessage.text}
        </Text>
      </View>
    </Pressable>
  )
}