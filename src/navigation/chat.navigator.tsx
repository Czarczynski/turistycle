import { CompositeNavigationProp } from '@react-navigation/native'
import {
  StackNavigationProp,
  StackScreenProps,
  createStackNavigator,
} from '@react-navigation/stack'
import * as React from 'react'
import { NativeStackScreenProps } from 'react-native-screens/native-stack'

import { ChatScreen } from '~screens/chat'
import { ConversationScreen } from '~screens/conversation'

import { RootStackParamList } from './index.navigator'

export type ChatStackParamList = {
  Chat: undefined
  Conversation: { corresponderUid: string }
}

// export type ChatStackScreenProps<Screen extends keyof ChatStackParamList> = CompositeNavigationProp<
//   StackNavigationProp<StackScreenProps<ChatStackParamList, Screen>>,
//   StackScreenProps<RootStackParamList>
// >

const Stack = createStackNavigator<ChatStackParamList>()
export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Chat">
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Conversation" component={ConversationScreen} />
    </Stack.Navigator>
  )
}
