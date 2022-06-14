import { getAuth } from 'firebase/auth'
import React, { VFC } from 'react'
import { FlatList, View } from 'react-native'

import { ConversationPreview } from '~features/ui/conversation-preview'
import { useUsers } from '~features/users/hooks/use-users'

import { useStores } from '~hooks/use-store'

import { Conversation as ConversationModel } from '~models/conversation.model'

import styles from './conversation-list.styles'

interface ConversationListProps {
  data: ConversationModel[]
}

export const ConversationList: VFC<ConversationListProps> = ({ data }) => {
  const { global } = useStores()
  const { data: users = [] } = useUsers(getAuth().currentUser!)

  return (
    <FlatList
      ItemSeparatorComponent={Separator}
      style={styles.container}
      data={data.sort((a, b) => b.lastMessage.time.toSeconds() - a.lastMessage.time.toSeconds())}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ConversationPreview
          key={item.id}
          userUid={global.user.uid as string}
          conversation={item}
          allUsers={users}
        />
      )}
    />
  )
}

const Separator = () => <View style={styles.separator} />
