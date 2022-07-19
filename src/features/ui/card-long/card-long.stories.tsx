import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { View } from 'react-native'

import { CardLong } from './card-long.component'

storiesOf('CardLong', module)
  .addDecorator((getStory) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{getStory()}</View>
  ))
  .add('common', () => <CardLong title={text('Title', 'Hello CardLong')} />)
