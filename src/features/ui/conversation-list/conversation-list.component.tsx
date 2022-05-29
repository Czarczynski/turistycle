import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, View } from 'react-native'

import { ConversationPreview } from '~features/ui/conversation-preview'

import { Conversation as ConversationModel } from '~models/conversation.model'

import styles from './conversation-list.styles'

interface ConversationListProps {
  data: ConversationModel[]
  userUid: string
}

export const ConversationList: VFC<ConversationListProps> = ({ data, userUid }) => {
  const { t } = useTranslation('conversation-list')

  return (
    <FlatList
      ItemSeparatorComponent={Separator}
      style={styles.container}
      data={data.sort((a, b) => b.lastMessage.time.toSeconds() - a.lastMessage.time.toSeconds())}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ConversationPreview key={item.id} userUid={userUid} conversation={item} />
      )}
    />
  )
}

const Separator = () => <View style={styles.separator} />
