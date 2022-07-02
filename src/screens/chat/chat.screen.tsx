import { observer } from 'mobx-react-lite'
import React, { VFC } from 'react'
import { View } from 'react-native'

import { ButtonFloating } from '~features/ui/button'
import { ConversationList } from '~features/ui/conversation-list'
import { Icon } from '~features/ui/icon'

import useNavigation from '~hooks/use-navigation'
import { useChat } from '~utils/chat-provider'

import styles from './chat.styles'

interface ChatScreenProps {}

export const ChatScreen: VFC<ChatScreenProps> = observer(() => {
  const { chatList } = useChat()
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <ConversationList data={chatList} />
      <ButtonFloating
        onPress={() => navigation.navigate('ChatNavigator', { screen: 'NewConversation' })}
      >
        {({ iconColor }) => <Icon name={'edit'} color={iconColor} />}
      </ButtonFloating>
    </View>
  )
})
