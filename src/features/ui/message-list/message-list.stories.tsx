import { storiesOf } from '@storybook/react-native'
import { DateTime } from 'luxon'
import React from 'react'
import { View } from 'react-native'

import { Message } from '~models/message.model'

import { MessageList } from './message-list.component'

const exampleData: Message[] = [
  { text: 'Hello', senderUid: '123', time: DateTime.fromJSDate(new Date(2022, 3, 20, 13, 20)) },
  { text: 'Hi', senderUid: '124', time: DateTime.fromJSDate(new Date(2022, 3, 20, 14)) },
  { text: 'Whats up', senderUid: '123', time: DateTime.fromJSDate(new Date(2022, 3, 20, 14, 10)) },
  { text: 'Great', senderUid: '124', time: DateTime.fromJSDate(new Date(2022, 3, 20, 18)) },
  { text: 'Hello', senderUid: '123', time: DateTime.fromJSDate(new Date(2022, 3, 20, 13, 20)) },
  { text: 'Hi', senderUid: '124', time: DateTime.fromJSDate(new Date(2022, 3, 20, 14)) },
  { text: 'Whats up', senderUid: '123', time: DateTime.fromJSDate(new Date(2022, 3, 20, 14, 10)) },
  { text: 'Great', senderUid: '124', time: DateTime.fromJSDate(new Date(2022, 3, 20, 18)) },
  { text: 'Hello', senderUid: '123', time: DateTime.fromJSDate(new Date(2022, 3, 20, 13, 20)) },
  { text: 'Hi', senderUid: '124', time: DateTime.fromJSDate(new Date(2022, 3, 20, 14)) },
  { text: 'Whats up', senderUid: '123', time: DateTime.fromJSDate(new Date(2022, 3, 20, 14, 10)) },
  { text: 'Great', senderUid: '124', time: DateTime.fromJSDate(new Date(2022, 3, 20, 18)) },
  { text: 'Hello', senderUid: '123', time: DateTime.fromJSDate(new Date(2022, 3, 20, 13, 20)) },
  { text: 'Hi', senderUid: '124', time: DateTime.fromJSDate(new Date(2022, 3, 20, 14)) },
  { text: 'Whats up', senderUid: '123', time: DateTime.fromJSDate(new Date(2022, 3, 20, 14, 10)) },
  { text: 'Great', senderUid: '124', time: DateTime.fromJSDate(new Date(2022, 3, 20, 18)) },
  { text: 'Hello', senderUid: '123', time: DateTime.fromJSDate(new Date(2022, 3, 20, 13, 20)) },
  { text: 'Hi', senderUid: '124', time: DateTime.fromJSDate(new Date(2022, 3, 20, 14)) },
  { text: 'Whats up', senderUid: '123', time: DateTime.fromJSDate(new Date(2022, 3, 20, 14, 10)) },
  { text: 'Great', senderUid: '124', time: DateTime.fromJSDate(new Date(2022, 3, 20, 18)) },
  { text: 'Hello', senderUid: '123', time: DateTime.fromJSDate(new Date(2022, 3, 20, 13, 20)) },
  { text: 'Hi', senderUid: '124', time: DateTime.fromJSDate(new Date(2022, 3, 20, 14)) },
  { text: 'Whats up', senderUid: '123', time: DateTime.fromJSDate(new Date(2022, 3, 20, 14, 10)) },
  { text: 'Great', senderUid: '124', time: DateTime.fromJSDate(new Date(2022, 3, 20, 18)) },
]

storiesOf('MessageList', module)
  .addDecorator((getStory) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{getStory()}</View>
  ))
  .add('common', () => <MessageList userUid={'123'} data={exampleData} />)
