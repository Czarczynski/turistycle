import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'

import { NewConversationScreen } from './new-conversation.screen'

storiesOf('NewConversationScreen', module).add('common', () => (
  <NewConversationScreen title={text('Title', 'Hello NewConversation')} />
))
