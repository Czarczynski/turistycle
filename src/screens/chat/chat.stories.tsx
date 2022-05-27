import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'

import { ChatScreen } from './chat.screen'

storiesOf('ChatScreen', module).add('common', () => (
  <ChatScreen title={text('Title', 'Hello Chat')} />
))
