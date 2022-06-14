import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { View } from 'react-native'

import { MessageInput } from './message-input.component'

storiesOf('MessageInput', module)
  .addDecorator((getStory) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{getStory()}</View>
  ))
  .add('common', () => <MessageInput onChangeText={() => null} onSubmitEditing={() => null} />)
