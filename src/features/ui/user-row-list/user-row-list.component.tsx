import React, { VFC } from 'react'
import { FlatList, View } from 'react-native'

import { UserRow } from '~features/ui/user-row'

import { useStores } from '~hooks/use-store'
import useNavigation from '~hooks/useNavigation'
import { useChat } from '~utils/chat-provider'

import { User } from '~models/user.model'

import styles from './user-row-list.styles'

interface UserRowListProps {
  data: User[]
}

export const UserRowList: VFC<UserRowListProps> = ({ data }) => {
  const { global } = useStores()
  const navigation = useNavigation()
  const { chatList } = useChat()
  const onItemPress = (corresponder: User) => {
    const searchConversation = chatList.find((conv) => {
      const isUserConversation = Boolean(conv.users.includes(global.user!.uid))
      if (isUserConversation) {
        const isCorresponderInConversation = Boolean(conv.users.includes(corresponder.uid))
        if (isCorresponderInConversation) return true
      }
      return false
    })
    navigation.navigate('ChatNavigator', {
      screen: 'Conversation',
      params: { corresponder, id: searchConversation ? searchConversation.id : null },
    })
  }
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      ItemSeparatorComponent={Separator}
      keyExtractor={(item) => `${item.uid}`}
      data={data}
      renderItem={({ item }) => (
        <UserRow key={item.uid} user={item} onPress={() => onItemPress(item)} />
      )}
    />
  )
}

const Separator = () => <View style={styles.separator} />
