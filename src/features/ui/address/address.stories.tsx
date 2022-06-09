import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { View } from 'react-native'

import { Address } from './address.component'

storiesOf('Address', module)
  .addDecorator((getStory) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{getStory()}</View>
  ))
  .add('common', () => <Address coordinate={{ latitude: 19, longitude: 10 }} />)
