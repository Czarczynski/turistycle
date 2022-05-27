import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'

import { ConversationScreen } from './conversation.screen'

storiesOf('ConversationScreen', module).add('common', () => (
  <ConversationScreen title={text('Title', 'Hello Conversation')} />
))
