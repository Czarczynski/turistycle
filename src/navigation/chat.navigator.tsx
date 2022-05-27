import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'

import { ChatScreen } from '~screens/chat'
import { ConversationScreen } from '~screens/conversation'

import { RootStackParamList } from './index.navigator'

export type ChatStackParamList = {
  Chat: undefined
  Conversation: undefined
}

export type ChatStackScreenProps<Screen extends keyof ChatStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<ChatStackParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>

const Stack = createNativeStackNavigator<ChatStackParamList>()
export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Chat">
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Conversation" component={ConversationScreen} />
    </Stack.Navigator>
  )
}
