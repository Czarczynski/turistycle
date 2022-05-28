import { storiesOf } from '@storybook/react-native'
import { DateTime } from 'luxon'
import React from 'react'
import { View } from 'react-native'

import { MessageLeft, MessageRight } from './message.component'

storiesOf('Message', module)
  .addDecorator((getStory) => (
    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 10 }}>{getStory()}</View>
  ))
  .add('common', () => (
    <MessageRight
      message={{
        text: 'some text',
        senderUid: '123',
        time: DateTime.fromJSDate(new Date(2022, 3, 20, 13)),
      }}
      showDate
    />
  ))
  .add('second', () => (
    <MessageLeft
      message={{
        text: 'some text',
        senderUid: '123',
        time: DateTime.fromJSDate(new Date(2022, 3, 20)),
      }}
    />
  ))
