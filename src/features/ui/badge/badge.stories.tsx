import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { View } from 'react-native'

import { Badge } from './badge.component'

storiesOf('Badge', module)
  .addDecorator((getStory) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{getStory()}</View>
  ))
  .add('common', () => <Badge number={3} />)
