import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Image, Pressable, Text, View } from 'react-native'

import useNavigation from '~hooks/use-navigation'

import { Conversation as ConversationModel } from '~models/conversation.model'
import { User } from '~models/user.model'

import styles from './conversation-preview.styles'

interface ConversationPreviewProps {
  userUid: string
  allUsers: User[]
  conversation: ConversationModel
}

export const ConversationPreview: VFC<ConversationPreviewProps> = ({
  userUid,
  conversation,
  allUsers,
}) => {
  const { t } = useTranslation('conversation-preview')
  const navigation = useNavigation()
  const { users, lastMessage } = conversation
  const isLastMessageOwner = Boolean(lastMessage.senderUid === userUid)
  const corresponder = allUsers.find((x) => x.uid === users.find((user) => user !== userUid))

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate('ChatNavigator', {
          screen: 'Conversation',
          params: { corresponder: corresponder!, id: conversation.id },
        })
      }
    >
      {corresponder?.photoURL && (
        <Image source={{ uri: corresponder.photoURL }} style={styles.photo} />
      )}
      {!corresponder?.photoURL && (
        <View style={styles.imagePlaceholder}>
          <Text style={styles.letter}>{corresponder?.displayName?.[0] ?? 'U'}</Text>
        </View>
      )}

      <View style={styles.innerContainer}>
        <Text style={styles.name}>{corresponder?.displayName}</Text>
        <Text style={styles.text}>
          {isLastMessageOwner && t`you`}
          {lastMessage.text}
        </Text>
      </View>
    </Pressable>
  )
}
