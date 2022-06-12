import React, { VFC } from 'react'
import { FlatList, View } from 'react-native'

import { ConversationPreview } from '~features/ui/conversation-preview'
import { useUsers } from '~features/users/hooks/use-users'

import { useStores } from '~hooks/use-store'
import { useChat } from '~utils/chat-provider'

import { Conversation as ConversationModel } from '~models/conversation.model'

import styles from './conversation-list.styles'

interface ConversationListProps {
  data?: ConversationModel[]
  userUid?: string
}

export const ConversationList: VFC<ConversationListProps> = ({ data, userUid }) => {
  const { global } = useStores()
  const { data: users = [] } = useUsers(global.user)
  const { chatList } = useChat()

  return (
    <FlatList
      ItemSeparatorComponent={Separator}
      style={styles.container}
      data={chatList.sort(
        (a, b) => b.lastMessage.time.toSeconds() - a.lastMessage.time.toSeconds(),
      )}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ConversationPreview
          key={item.id}
          userUid={global.user.uid}
          conversation={item}
          allUsers={users}
        />
      )}
    />
  )
}

const Separator = () => <View style={styles.separator} />
