import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { View } from 'react-native'

import { Message } from '~models/message.model'

import { MessageList } from './message-list.component'

const exampleData: Message[] = []

storiesOf('MessageList', module)
  .addDecorator((getStory) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{getStory()}</View>
  ))
  .add('common', () => <MessageList data={exampleData} />)
