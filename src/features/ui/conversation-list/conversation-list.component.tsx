import { getAuth } from 'firebase/auth'
import React, { VFC } from 'react'
import { FlatList, View } from 'react-native'

import { SkeletonConversationList } from '~features/ui/conversation-list/conversation-list.skeleton'
import { ConversationPreview } from '~features/ui/conversation-preview'
import { useUsers } from '~features/users/hooks/use-users'

import { useStores } from '~hooks/use-store'

import { Conversation as ConversationModel } from '~models/conversation.model'
import { User } from '~models/user.model'

import styles from './conversation-list.styles'

interface ConversationListProps {
  data: ConversationModel[]
}

export const ConversationList: VFC<ConversationListProps> = ({ data }) => {
  const { global } = useStores()

  const { data: users = [], isFetched } = useUsers(getAuth().currentUser!)

  if (!isFetched) {
    return <SkeletonConversationList />
  }

  return (
    <FlatList
      ItemSeparatorComponent={Separator}
      style={styles.container}
      extraData={data.length}
      data={data.sort((a, b) => b.lastMessage.time.toSeconds() - a.lastMessage.time.toSeconds())}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ConversationPreview
          key={item.id}
          userUid={(global.user as User).uid}
          conversation={item}
          allUsers={users}
        />
      )}
    />
  )
}

const Separator = () => <View style={styles.separator} />
