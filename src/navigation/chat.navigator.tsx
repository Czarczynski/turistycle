import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

import { ChatScreen } from '~screens/chat'
import { ConversationScreen } from '~screens/conversation'
import { NewConversationScreen } from '~screens/new-conversation'

import { HeaderDefault } from '~features/ui/navigation-header'

import { User } from '~models/user.model'

export type ChatStackParamList = {
  Chat: undefined
  NewConversation: undefined
  Conversation: { corresponder: User; id: string | null }
}

const Stack = createStackNavigator<ChatStackParamList>()
export default function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="Chat"
      screenOptions={{
        headerTransparent: true,
        header: (props) => <HeaderDefault {...props} />,
      }}
    >
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Conversation" component={ConversationScreen} />
      <Stack.Screen name="NewConversation" component={NewConversationScreen} />
    </Stack.Navigator>
  )
}
