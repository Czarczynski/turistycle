import { storiesOf } from '@storybook/react-native'
import { DateTime } from 'luxon'
import React from 'react'
import { View } from 'react-native'

import { ConversationPreview } from './conversation-preview.component'

storiesOf('ConversationPreview', module)
  .addDecorator((getStory) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{getStory()}</View>
  ))
  .add('common', () => (
    <ConversationPreview
      userUid={'123'}
      conversation={{
        lastMessage: {
          text: 'Hello',
          senderUid: '124',
          time: DateTime.fromJSDate(new Date(2022, 3, 20, 13, 20)),
        },
        messages: [
          {
            text: 'Hello',
            senderUid: '124',
            time: DateTime.fromJSDate(new Date(2022, 3, 20, 13, 20)),
          },
        ],
        id: 'conv-1',
        users: [
          {
            uid: '123',
            displayName: 'Czarek',
            imageUri: 'xxx',
          },
          {
            uid: '124',
            displayName: 'Michael',
            imageUri:
              'https://www.vogue.pl/uploads/repository/mac_macstackmascara/mac-fy22-macstack-01-0151-v3-rgb150-app.jpg',
          },
        ],
      }}
    />
  ))
  .add('common 2', () => (
    <ConversationPreview
      userUid={'123'}
      conversation={{
        lastMessage: {
          text: 'Hello',
          senderUid: '123',
          time: DateTime.fromJSDate(new Date(2022, 3, 20, 13, 20)),
        },
        messages: [
          {
            text: 'Hello',
            senderUid: '123',
            time: DateTime.fromJSDate(new Date(2022, 3, 20, 13, 20)),
          },
        ],
        id: 'conv-1',
        users: [
          {
            uid: '123',
            displayName: 'Czarek',
            imageUri: 'xxx',
          },
          {
            uid: '124',
            displayName: 'Michael',
            imageUri:
              'https://www.vogue.pl/uploads/repository/mac_macstackmascara/mac-fy22-macstack-01-0151-v3-rgb150-app.jpg',
          },
        ],
      }}
    />
  ))
