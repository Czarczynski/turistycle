import React from 'react'

import { RootStackScreenProps } from '~navigation/index.navigator'

import { ConversationScreen } from './conversation.screen'

export default function ({ navigation }: RootStackScreenProps<'Conversation'>) {
  return <ConversationScreen />
}
