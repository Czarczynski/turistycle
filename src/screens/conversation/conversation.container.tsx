import React, { VFC } from 'react'

import { User } from '~models/user.model'

import { ConversationScreen } from './conversation.screen'

interface ConversationContainerProps {
  route: {
    params: {
      corresponder: User
      id: string
    }
  }
}
const ConversationContainer: VFC<ConversationContainerProps> = ({ route }) => {
  return (
    <ConversationScreen conversationId={route.params.id} corresponder={route.params.corresponder} />
  )
}

export default ConversationContainer
